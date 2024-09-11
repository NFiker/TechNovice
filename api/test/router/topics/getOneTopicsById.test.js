// import request from 'supertest';
// import { expect } from 'chai';
// import app from 

// describe('GET /api/topics/:topic_id', () => {
//     it('should throw a 404 if topic is not found', async () => {
//         const response = await request(this.app)
//             .get('api/topics/1')
//             .set('Accept', 'application/json')

//         expect(response.status).to.equal(404);
//         expect(response.body.message).to.equal('Sujet non trouvé');
//     });

//     it('should succeed if topic is found', async () => {
//         const payload = {
//             "topic_title": "Comment réduire l’espace entre les titres et paragraphes sur Word",
//             "topic_tag": [
//                 "word", "paragraphe"
//             ],
//             "topic_content": "Bonjour, J’ai modifié les styles de mots afin de pouvoir numéroter mes « titres 1 » en chapitres",
//             "author_user_id": 1
//         }

//         const res = await request(this.app)
//             .post('/api/topics')
//             .send(payload);
//             .expect(200);

//         const topicId = res.body.topic_id;

//         const response = await request(this.app)
//             .get('/api/topics/' + topicId)
//             .set('Accept', 'application/json');

//         expect(response.status).to.equal(200);
//         expect(response.body).to.be.an('object').with.all.keys(["topic_tittle","topic_tag","topic_content","author_user_id"]);
//         expect(response.body.creation_date).to.be.a('string');
//         expect(response.body.update_date).to.be.a('string');
//         expect(response.body).to.equal({
//             ...payload,
//             topic_id: topicId
//         });
//     });
// });