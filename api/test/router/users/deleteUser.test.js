import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestUser } from '../../fixtures.js';

const prisma = new PrismaClient();

describe('DELETE /api/users/:user_id', () => {
    let userId = null;

    before(async () => {
        await prisma.users.deleteMany(); 
        const user = await createTestUser(); 
        userId = user.user_id;
    });

    it('should succeed if user is deleted', async function () {
        const response = await request(this.app)
            .get('/api/users/' + userId)
            .set('Accept', 'application/json');

            expect(response.status).to.equal(200);
            expect(response.body)
            .to.be.an('object')
            .with.all.keys([
                "user_id",
                "nickname",
                "mail",
                "password",
                "first_name",
                "last_name",
                "role_name",
                "comments",
                "courses",
                "watches",
                "topics"
            ]);
            expect(response.body.user_id).to.eq(userId);
            expect(response.body.nickname).to.be.a("string");
            expect(response.body.mail).to.be.a("string");
            expect(response.body.password).to.be.a("string");
            expect(response.body.first_name).to.be.a("string");
            expect(response.body.last_name).to.be.a("string");
            expect(response.body.role_name).to.be.a("string");
    });
});

   