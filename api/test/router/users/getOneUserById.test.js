// import request from 'supertest';
// import { expect } from 'chai';
// import app from 

// describe('GET /api/users/:user_id', () => {
//     it('should throw a 404 if user is not found', async () => {
//         const response = await request(app)
//             .get('/api/users/1')
//             .set('Accept', 'application/json')

//         expect(response.status).to.equal(404);
//         expect(response.body.message).to.equal('Utilisateur non trouvé');
//     });

//     it('should succeed if user is found', async () => {
//         const payload = {
//             "nickname": "Camille9 ",
//             "mail": "camille9@gmail.com",
//             "password": "camille230399",
//             "first_name": "Camille",
//             "last_name": "Dupont",
//             "role_name": "apprenant",
//         }

//         const res = await request(app)
//             .post('/users')
//             .send(payload);

//         const userId = res.body.user_id;

//         const response = await request(app)
//             .get('/users/' + userId)
//             .set('Accept', 'application/json');

//         expect(response.status).to.equal(200);
//         expect(response.body).to.be.an('object').with.all.keys(["nickname","mail","password","first_name","last_name","role_name"]);
//         expect(response.body.creation_date).to.be.a('string');
//         expect(response.body.update_date).to.be.a('string');
//         expect(response.body).to.equal({
//             ...payload,
//             user_id: userId
//         });
//     });
// });

   