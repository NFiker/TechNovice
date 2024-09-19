import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestTopic } from '../../fixtures.js';

const prisma = new PrismaClient();

describe('GET /api/topics/:topic_id', () => {
    let topicId = null;

    before(async () => {
        await prisma.topics.deleteMany(); 
        const topic = await createTestTopic(); 
        topicId = topic.topic_id;
    });

    it('should throw a 404 if topic is not found', async function () {
        const response = await request(this.app)
            .get('/api/topics/999')
            .set('Accept', 'application/json')

        expect(response.status).to.equal(404);
        expect(response.body.message).to.equal('Discussion topic not found');
    });

    it('should succeed if topic is found', async function () {
        const response = await request(this.app)
            .get('/api/topics/' + topicId)
            .set('Accept', 'application/json');

        expect(response.status).to.equal(200);
        expect(response.body)
            .to.be.an('object')
            .with.all.keys([
                "topic_id",
                "topic_title",
                "topic_tag",
                "topic_content",
                "author_user_id",
                "topic_date",
                "comments",
            ]);
            
            expect(response.body.topic_id).to.eq(topicId);
            expect(response.body.topic_title).to.be.a("string");
            expect(response.body.topic_tag).to.be.a("array").lengthOf(2);
            expect(response.body.topic_content).to.be.a("string");
            expect(response.body.author_user_id).to.be.a("number");
            expect(response.body.comments).to.be.a("array");
    });
});

   