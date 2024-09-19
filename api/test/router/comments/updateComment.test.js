import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestComment } from '../../fixtures.js';

const prisma = new PrismaClient();

describe('PATCH /api/topics/:topic_id/message/:com_id', () => {
    
let topicId = null; 
let comId = null;

    before(async () => {
        await prisma.topics.deleteMany(); 
        const topic = await createTestComment(); 
        topicId = topic.topic_id;
        comId = topic.com_id;
    });

    const payload = {
            "topic_id": 1,
            "com_content": "Super sujet merci beaucoup pour votre aide",
            "author_user_id": 1
    }

    it('should succeed if comment is changed', async function ()  {
        const response = await request(this.app)
            .patch(`/api/topics/${topicId}/message/${comId}`)
            .send(payload)
            .expect(200);
            
            expect(response.status).to.equal(200);
            expect(response.body)
            .to.be.an('object')
            .with.all.keys([
                "com_id",
                "topic_id",
                "com_content",
                "com_date",
                "author_user_id"
            ]);

            expect(response.body.com_id).to.not.be.null;
            expect(response.body.topic_id).to.eq(topicId);
            expect(response.body.com_content).to.be.a("string");
            expect(response.body.author_user_id).to.be.a("number");
        
    })
});

