import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestWatche } from '../../fixtures.js';

const prisma = new PrismaClient();

describe.only('POST /api/topics/:topic_id/message', () => {
    let topicId = null;

    before(async () => {
        await prisma.topics.deleteMany(); // Nettoyer la base de données de test
        await createTestWatche(); // Insérer des données de test
       
    });

    it('should throw a 404 if user is not found', async function () {
        const response = await request(this.app)
            .get('/api/users/999')
            .set('Accept', 'application/json')

        expect(response.status).to.equal(404);
        expect(response.body.message).to.equal('user non trouvé');
    });

    const payload = {
        data:{
            "topic_id": 1,
            "com_content": "Super sujet merci beaucoup",
            "user_id": 1
        }
    }
    
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
                "user_id"
            ]);

            expect(response.body.com_id).to.not.be.null;
            expect(response.body.topic_id).to.eq(topicId);
            expect(response.body.com_content).to.be.a("string");
            expect(response.body.user_id).to.be.a("number");
            
        });
});

