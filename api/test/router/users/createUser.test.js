import { expect } from 'chai';
import request from 'supertest';
import { createTestUsers } from '../fixtures.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

beforeEach(async () => {
  await prisma.users.deleteMany(); // Nettoyer la base de données de test
  await createTestUsers(); // Insérer des données de test
});

describe('POST /api/users/', () => {
    const payload = {
        "nickname": "Camille96 ",
        "mail": "camille96@gmail.com",
        "password": "camille230399",
        "first_name": "Camille",
        "last_name": "Dupont",
        "role_name": "apprenant",
    }

    it('should fail if nickame and mail is not unique', async function ()  {
        const { body } = await request(this.app)
            .post('/api/users')
            .send(payload)
            .expect(409);

        expect(body.message).to.eq('DUPLICATE_NICKNAME && DUPLICATE_MAIL');
    });

    it('should succeed if users is found', async function ()  {
        const { body } = await request(this.app)
            .post('/api/users')
            .send(payload)
            .expect(200);

        expect(body).to.be.an('object').with.all.keys(["nickname","mail","password","first_name","last_name","role_name","role_name"]);
    });
});


   