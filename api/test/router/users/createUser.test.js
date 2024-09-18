import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';

const prisma = new PrismaClient();

// #1 ECHEC: si un utilisateur est créé avec un email déjà existant en bdd
// #2 ECHEC: si un utilisateur est créé avec un nickname déjà existant en bdd

describe('POST /api/users/', () => {
    const payload = {
        "nickname": "Camille9",
        "mail": "camille9@gmail.com",
        "password": "Camille2302199!",
        "first_name": "Camille",
        "last_name": "Dupont",
        "role_name": "apprenant",   
    };
   
    beforeEach(async () => {
        await prisma.users.deleteMany();
    });

    it('should fail if nickname is already in db', async function ()  {
        // Crée un utilisateur avec le pseudo
        await prisma.users.create({ data: payload });
        const response = await request(this.app)
            .post('/api/users/')
            .send(payload)  
            .expect(409);  
            expect(response.body).to.deep.equal({ message: 'NICKNAME_ALREADY_USED' });
     });
    
    
     it('should fail if mail is already in db', async function ()  {
        // Crée un utilisateur avec l'email
        await prisma.users.create({ data: payload });

        const response = await request(this.app)
            .post('/api/users/')
            .send({ ...payload, nickname: 'Charlotte9' })  
            .expect(409);  
            
            expect(response.body).to.deep.equal({ message: 'MAIL_ALREADY_USED' });
    });


    it('should succeed if user is created', async function ()  {
        const response = await request(this.app)
            .post('/api/users/')
            .send(payload)
            .expect(201);

            expect(response.status).to.equal(201);
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

            expect(response.body.user_id).to.not.be.null;
            expect(response.body.nickname).to.be.a("string");
            expect(response.body.mail).to.be.a("string");
            expect(response.body.password).to.be.a("string");
            expect(response.body.first_name).to.be.a("string");
            expect(response.body.last_name).to.be.a("string");
            expect(response.body.role_name).to.be.a("string");
    });
});
