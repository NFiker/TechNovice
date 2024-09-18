import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestTopic } from '../../fixtures.js';

const prisma = new PrismaClient();

describe('DELETE /api/topics/:topic_id', () => {
    let topicId = null;

    before(async () => {
        await prisma.topics.deleteMany(); // Nettoyer la base de données de test
        const topic = await createTestTopic(); // Insérer des données de test
        topicId = topic.topic_id;
    });

    it('should succeed if topic is deleted', async function () {
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
                "comments"
                
            ]);
        expect(response.body.topic_id).to.eq(topicId);
        expect(response.body.topic_title).to.be.a("string");
        expect(response.body.topic_tag).to.be.a("array").lengthOf(2);
        expect(response.body.topic_content).to.be.a("string");
        expect(response.body.author_user_id).to.be.a("number");
        expect(response.body.comments).to.be.a("array");
    });
});
