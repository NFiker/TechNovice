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

    beforeEach(async () => {
        await prisma.users.deleteMany();
        const user = await createTestUser(); 
        userId = user.user_id;
    });

    it('should fail if user not found ', async function ()  {
       const response = await request(this.app)
           .patch(`/api/users/${userId + 9999}`)
           .send(payload)  
           .expect(404);  
           expect(response.body).to.deep.equal({ message: 'User not found' });
    });
   

    it('should succeed if user exist', async function ()  {
        const response = await request(this.app)
            .patch(`/api/users/${userId}`)
            .send(payload)
            .expect(200);
            
            expect(response.status).to.equal(200);
            expect(response.body)
                .to.be.an('object')
                .with.all.keys([
                    "user_id",
                    "nickname",
                    "mail",
                    "first_name",
                    "last_name",
                    "role_name"
                ]);

            expect(response.body.user_id).to.eq(userId);
            expect(response.body.nickname).to.equal(payload.nickname);
            expect(response.body.mail).to.equal(payload.mail);
            expect(response.body.password).to.be.undefined;
            expect(response.body.first_name).to.equal(payload.first_name);
            expect(response.body.last_name).to.equal(payload.last_name);
            expect(response.body.role_name).to.equal(payload.role_name);
        
    })
});