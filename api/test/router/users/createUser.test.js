// import { PrismaClient } from '@prisma/client';
// import { expect } from 'chai';
// import request from 'supertest';
// import { createTestUser } from '../../fixtures.js';

// const prisma = new PrismaClient();

// describe.only('POST /api/users/', () => {
   
//     before(async () => {
//         await prisma.users.deleteMany(); // Nettoyer la base de données de test
//         await createTestUser(); // Insérer des données de test

//     });
//     const payload = {
//         "nickname": "Camille9",
//         "mail": "camille9@gmail.com",
//         "password": "camille230399",
//         "first_name": "Camille",
//         "last_name": "Dupont",
//         "role_name": "apprenant",   
//     }

//     it('should succeed if user is found', async function ()  {
     
//         const response = await request(this.app)
//             .post('/api/users/')
//             .send(payload)
//             .expect(200);

//         console.log('[---> [ici aussi] <---]:', true);

//             expect(response.status).to.equal(200);
//             expect(response.body)
//             .to.be.an('object')
//             .with.all.keys([
//                 "user_id",
//                 "nickname",
//                 "mail",
//                 "password",
//                 "first_name",
//                 "last_name",
//                 "role_name"
//             ]);

//             expect(response.body.user_id).to.not.be.null;
//             expect(response.body.nickname).to.be.a("string");
//             expect(response.body.mail).to.be.a("string");
//             expect(response.body.password).to.be.a("string");
//             expect(response.body.first_name).to.be.a("string");
//             expect(response.body.last_name).to.be.a("string");
//             expect(response.body.role_name).to.be.a("string");
//         });
//     });
