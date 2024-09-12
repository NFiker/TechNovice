import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestUser } from '../../fixtures.js';

const prisma = new PrismaClient();

console.log('[---> [outside] <---]:', true);
describe('POST /api/users/', () => {
    beforeEach(async () => {
      await prisma.users.deleteMany(); // Nettoyer la base de données de test
      await createTestUser(); // Insérer des données de test
    });

    after(async () => {
      await prisma.users.deleteMany();
    });
    
    it('should succeed if users is found', async function ()  {
        console.log('[---> [avant payload] <---]:', true);
        const payload = {
            "nickname": "Camille9",
            "mail": "camille9@gmail.com",
            "password": "camille230399",
            "first_name": "Camille",
            "last_name": "Dupont",
            "role_name": "apprenant",
        }
        console.log('[---> [dans le test] <---]:', true);
        const { body } = await request(this.app)
            .post('/api/users')
            .send(payload)
            .expect(201);
        console.log('[---> [après body] <---]:', true);
        expect(body).to.be.an('object').with.all.keys(["nickname","mail","password","first_name","last_name","role_name"]);
        console.log('[---> [HERE] <---]:', true);
    });
});


   