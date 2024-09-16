import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestComment } from '../../fixtures.js';

const prisma = new PrismaClient();

describe.only('PATCH /api/topics/:topic_id(\\d+)/message/:com_id(\\d+)', () => {
    
let topicId = null;

    before(async () => {
        await prisma.topics.deleteMany(); // Nettoyer la base de données de test
        const topic = await createTestComment(); // Insérer des données de test
        topicId = topic.topic_id;
        comId = topic.com_id;
    });

    const payload = {
         data:{
            "topic_id": 1,
            "com_content": "Super sujet merci beaucoup",
            "author_user_id": 1
        }
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
                "comment_id",
                "comment_title",
                "comment_desc",
                "comment_tags",
                "comment_content",
                "author_user_id",
                "creation_date",
                "update_date"
            ]);

     expect(response.body.comment_id).to.eq(commentId);
     expect(response.body.comment_title).to.be.a("string");
     expect(response.body.comment_desc).to.be.a("string");
     expect(response.body.comment_tags).to.be.a("array").lengthOf(2);
     expect(response.body.comment_content).to.be.a("string");
            
    })
});

