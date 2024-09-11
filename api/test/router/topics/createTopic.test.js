// import request from 'supertest';
// import { expect } from 'chai';
// import app from 

// describe('GET /api/courses/', () => {
//     it('should throw a 500 if course is not found', async () => {
//         const response = await request(app)
//             .get('/api/courses/1')
//             .set('Accept', 'application/json')

//         expect(response.status).to.equal(500);
//         expect(response.body.message).to.equal('Cours Erreur lors de la création du cours trouvé');
//     });

//     it('should succeed if course is found', async () => {
//         const payload = {
//             "course_title": "Les fonctions de base Word ",
//             "course_desc": "Comment écrire et mettre en forme un texte, comment mettre en forme les paragraphes ou imprimer, comprendre les icônes du ruban Accueil.",
//             "course_tags": [
//                 "Word", "Bureautique"
//             ],
//             "course_content": "Windows vous permet d’accèder en un clic à l’aide d’un raccourci sur le bureau à un logiciel utilisé fréquemment.",
//             "author_user_id": 1
//         }

//         const res = await request(app)
//             .post('/api/courses')
//             .send(payload);

//         const courseId = res.body.course_id;

//         const response = await request(app)
//             .post('/api/courses/' )
//             .set('Accept', 'application/json');

//         expect(response.status).to.equal(200);
//         expect(response.body).to.be.an('object').with.all.keys(["course_id","course_title","course_content","creation_date","update_date","author_user_id"]);
//         expect(response.body.creation_date).to.be.a('string');
//         expect(response.body.update_date).to.be.a('string');
//         expect(response.body).to.equal({
//             ...payload,
//             course_id: courseId
//         });
//     });
// });

   