import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestUser } from '../../fixtures.js';

const prisma = new PrismaClient();

describe('GET /api/users/', () => {
    before(async () => {
        await prisma.users.deleteMany(); // Nettoyer la base de données de test
        await createTestUser(); // Insérer des données de test
    })

    it('should succeed if users is found', async function () {
        const response = await request(this.app)
            .get('/api/users')
            .set('Accept','application/json')
            .expect(200);

        expect(response.body).to.be.an('array');
        expect(response.body.length).to.be.greaterThan(0);
        expect(response.body).to.not.be.empty;

        response.body.forEach(user => {
            expect(user)
                .to.be.an('object')
                .with.all.keys([
                    "user_id",
                    "nickname",
                    "mail",
                    "password",
                    "first_name",
                    "last_name",
                    "role_name"
                ]);

            expect(user.user_id).not.to.be.null;
            expect(user.nickname).to.be.a('string');
            expect(user.mail).to.be.a('string');
            expect(user.password).to.be.a('string');
            expect(user.first_name).to.be.a('string');
            expect(user.last_name).to.be.a('string');
            expect(user.role_name).to.be.a('string');
            
        });
    });
});