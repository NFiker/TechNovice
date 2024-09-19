// import { PrismaClient } from '@prisma/client';
// import { expect } from 'chai';
// import request from 'supertest';
// import { createTestTeacher } from '../../fixtures.js';

// const prisma = new PrismaClient();

// describe('GET /api/teachers/', () => {
//     before(async () => {
//         await prisma.users.deleteMany(); // Nettoyer la base de données de test
//         await createTestTeacher(); // Insérer des données de test
//     });

//     it('should throw a 404 if teachers is not found', async function () {
//         const response = await request(this.app)
//             .get('/api/teachers/')
//             .set('Accept', 'application/json')

//         expect(response.status).to.equal(404);
//         expect(response.body.message).to.equal('No teachers found');
//     });

//     it('should succeed teachers is found', async function () {
//         const response = await request(this.app)
//             .get('/api/teachers')
//             .set('Accept','application/json')
//             .expect(200);

//         expect(response.body.length).to.be.greaterThan(0);
//         expect(response.body).to.not.be.empty;

//         response.body.forEach(user => {
//             expect(user)
//                 .to.be.an('object')
//                 .with.all.keys([
//                     "user_id",
//                     "nickname",
//                     "mail",
//                     "password",
//                     "first_name",
//                     "last_name",
//                     "role_name",
//                 ]);
           
//             expect(user.user_id).not.to.be.null;
//             expect(user.nickname).to.be.a('string');
//             expect(user.mail).to.be.a('string');
//             expect(user.password).to.be.a('string');
//             expect(user.first_name).to.be.a('string');
//             expect(user.last_name).to.be.a('string');
//             expect(user.role_name).to.be.a('string');
//         });
//     });
// });