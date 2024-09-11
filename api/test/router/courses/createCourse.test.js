// import { expect } from 'chai';
// import request from 'supertest';

// describe('POST /api/courses/', () => {
//     const payload = {
//         "course_title": "Les fonctions de base Word ",
//         "course_desc": "Comment écrire et mettre en forme un texte, comment mettre en forme les paragraphes ou imprimer, comprendre les icônes du ruban Accueil.",
//         "course_tags": [
//             "Word", "Bureautique"
//         ],
//         "course_content": "Windows vous permet d’accèder en un clic à l’aide d’un raccourci sur le bureau à un logiciel utilisé fréquemment.",
//         "author_user_id": 1
//     }

//     it('should fail if course_title is not unique', async function ()  {
//         const { body } = await request(this.app)
//             .post('/api/courses')
//             .send(payload)
//             .expect(409);

//         expect(body.message).to.eq('DUPLICATE_COURSE_TITLE');
//     });

//     it('should succeed if course is found', async function ()  {
//         const { body } = await request(this.app)
//             .post('/api/courses')
//             .send(payload)
//             .expect(200);

//         expect(body).to.be.an('object').with.all.keys(["course_id","course_title","course_content","creation_date","update_date","author_user_id"]);
//         expect(body.creation_date).to.be.a('string');
//         expect(body.update_date).to.be.a('string');
//     });
// });


   