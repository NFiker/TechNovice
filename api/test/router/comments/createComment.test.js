import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestComment } from '../../fixtures.js';

const prisma = new PrismaClient();

describe.only('POST /api/topics/:topic_id/message', () => {
    let topicId = null;

    const payload = {
        "topic_id": 1,
        "com_content": "Super sujet merci beaucoup",
        "author_user_id": 1,
    }

    before(async () => {
        await prisma.comments.deleteMany();
        await prisma.topics.deleteMany(); 
        const { topic_id } = await createTestComment(); // Récupérer l'ID du topic
        topicId = topic_id; 
        authorUserId = author_user_id;
    });

    it('should fail if author is missing', async function ()  {
        const missingAuthorUserId = { ...payload };
        delete missingAuthorUserId.author_user_id;

        const response = await request(this.app)
            .post(`/api/topics/${topicId}/message`)
            .send(missingAuthorUserId)
            .expect(400); 

        expect(response.body).to.eq({ message: 'author_user_id is required' });
    });

    it('should fail if the topic is missing', async function ()  {
        const missingtopicId = { ...payload };
        delete missingtopicId.topic_id;

        const response = await request(this.app)
            .post(`/api/topics/${topicId}/message`)
            .send(missingtopicId)
            .expect(400); 

        expect(response.body).to.eq({ message: 'topic_id is required' });
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

