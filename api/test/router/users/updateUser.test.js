import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestUser} from '../../fixtures.js';

const prisma = new PrismaClient();
describe('PATCH /api/users/:user_id', () => {
    
    let userId = null;

    const payload = {
        "nickname": "Camille9",
        "mail": "camille9@gmail.com",
        "password": "Camille230399!",
        "first_name": "Camille",
        "last_name": "Deluxe",
        "role_name": "administrateur", 
    };

    before(async () => {
        await prisma.users.deleteMany();
        const user = await createTestUser(); 
        userId = user.user_id;
    });

    it('should fail if nickname is already in db', async function ()  {
        const conflictPayload = {
            ...payload,
            nickname: 'Camille9'
        }
    });
    
    it('should fail if mail is already in db', async function ()  {
        const conflictPayload = {
            ...payload,
            mail: 'camille9@gmail.com'
        }
    });


    it('should succeed if user is changed', async function ()  {
        const response = await request(this.app)
            .patch('/api/users/' + userId)
            .send(payload)
            .expect(200);
            
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
                    "role_name"
                ]);
            expect(response.body.user_id).to.eq(userId);
            expect(response.body.nickname).to.be.a("string");
            expect(response.body.mail).to.be.a("string");
            expect(response.body.password).to.be.a("string");
            expect(response.body.first_name).to.be.a("string");
            expect(response.body.last_name).to.be.a("string");
            expect(response.body.role_name).to.be.a("string");
        
    })
});

