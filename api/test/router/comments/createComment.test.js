import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestComment } from '../../fixtures.js';

const prisma = new PrismaClient();

describe('POST /api/topics/:topic_id/message', () => {
    let topicId = null;
    let authorUserId = null;

    const payload = {
        "topic_id": 1,
        "com_content": "Super sujet merci beaucoup",
        "author_user_id": 1,
    };

    beforeEach(async () => {
        await prisma.comments.deleteMany();
        await prisma.topics.deleteMany(); 
        const comment = await createTestComment();

        topicId = comment.topic_id;
        authorUserId = comment.author_user_id;
    });

    after(async () => {
        await prisma.$disconnect();
    });

    it('should fail if author_user_id is missing', async function ()  {
        const missingAuthorUserId = { ...payload };
        delete missingAuthorUserId.author_user_id;

        const response = await request(this.app) 
            .post(`/api/topics/${topicId}/message`)
            .send(missingAuthorUserId)
            .expect(400); 

        expect(response.body).to.deep.equal({ message: "\"author_user_id\" is required" });
    });

    it('should fail if  topic_id is missing', async function ()  {
        const missingTopicId = { ...payload };
        delete missingTopicId.topic_id;

        const response = await request(this.app) 
            .post(`/api/topics/${topicId}/message`)
            .send(missingTopicId)
            .expect(400); 

        expect(response.body).to.deep.equal({ message: "\"topic_id\" is required" });
    });

    it('should fail if author_user_id is not found', async function () {
        const badPayload = { ...payload };
        badPayload.author_user_id = 999999; 

        const response = await request(this.app)
            .post(`/api/topics/${topicId}/message`)
            .send(badPayload);

        expect(response.status).to.equal(404);
        expect(response.body).to.deep.equal({ error: 'Auteur non trouvé.' });
    });

    it('should fail if topic_id is not found', async function () {
        const badPayload = { ...payload };
        badPayload.topic_id = 9; 

        const response = await request(this.app)
            .post(`/api/topics/${badPayload.topic_id}/message`)
            .send(badPayload);

        expect(response.status).to.equal(404);
        expect(response.body).to.deep.equal({ error: 'Sujet non trouvé.' });
    });


    it('should succeed if comment is created', async function ()  {
        const response = await request(this.app) 
            .post(`/api/topics/${topicId}/message`)
            .send(payload)
            .expect(201); 

        expect(response.status).to.equal(201);
        expect(response.body)
            .to.be.an('object')
            .with.all.keys([
                "com_id",
                "topic_id",
                "com_content",
                "com_date",
                "author_user_id"]);

        expect(response.body.com_id).to.not.be.null;
        expect(response.body.topic_id).to.eq(topicId);
        expect(response.body.com_content).to.be.a("string");
        expect(response.body.author_user_id).to.be.a("number");
    });
});