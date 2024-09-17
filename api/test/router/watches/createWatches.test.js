import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestWatche } from '../../fixtures.js';

const prisma = new PrismaClient();

describe('POST /api/watches/courses/:course_id/users/:user_id', () => {
    let userId = null;
    let courseId = null;

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
    
    it('should succeed if watche is created', async function ()  {
        const response = await request(this.app)
            .post(`/api/watches/courses/${courseId}/users/${userId}`)
            .send(payload)
            .expect(201);

            expect(response.status).to.equal(201);
            expect(response.body)
            .to.be.an('object')
            .with.all.keys([
                "course_id",
                "user_id"
            ]);

            expect(response.body.com_id).to.not.be.null;
            expect(response.body.topic_id).to.eq(topicId);
        });
});

