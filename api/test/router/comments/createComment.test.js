import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestComment } from '../../fixtures.js';

const prisma = new PrismaClient();

describe.only('POST /api/topics/:topic_id/message', () => {
    let topicId = null;

    before(async () => {
        console.log('[---> [1] <---]:', true);
        await prisma.topics.deleteMany(); // Nettoyer la base de données de test
        await createTestComment(); // Insérer des données de test
       
    });

    it.only('should throw a 404 if user is not found', async function () {
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
            "author_user_id": 1
        }
    }
    
    it('should succeed if comment is found', async function ()  {
        console.log('[---> [2] <---]:', true);
        const response = await request(this.app)
            .post('/api/topics/:topic_id(\\d+)/message')
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
                "author_user_id"]);

            expect(response.body.com_id).to.not.be.null;
            expect(response.body.topic_id).to.eq(topicId);
            expect(response.body.com_content).to.be.a("string");
            expect(response.body.author_user_id).to.be.a("number");
            
        });
});

