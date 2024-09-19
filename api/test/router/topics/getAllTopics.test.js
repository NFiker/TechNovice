import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestTopic } from '../../fixtures.js';

const prisma = new PrismaClient();

describe('GET /api/topics/', () => {
    before(async () => {
        await prisma.topics.deleteMany(); 
        await createTestTopic(); 

        it('should succeed if topics is found', async function () {
            const response = await request(this.app)
                .get('/api/topics')
                .set('Accept','application/json')
                .expect(200);

            expect(response.body).to.be.an('array');
            expect(response.body.length).to.be.greaterThan(0);
            expect(response.body).to.not.be.empty;

            response.body.forEach(topic => {
                expect(topic)
                .to.be.an('object')
                .with.all.keys([
                    "topic_id",
                    "topic_title",
                    "topic_tag",
                    "topic_content",
                    "author_user_id",
                    "topic_date",
                ]);

                expect(topic.topic_id).not.to.be.null;
                expect(topic.topic_title).to.be.a('string');
                expect(topic.topic_tag).to.be.an('array').that.has.lengthOf(2);
                expect(topic.topic_content).to.be.a('string');
                expect(topic.author_user_id).to.be.a('number');
            
            });
        });
    });
})
