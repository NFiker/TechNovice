import { expect } from 'chai';
import request from 'supertest';

describe('GET /api/courses/:course_id', () => {

    // before(() => {
    //     console.log('[---> [BEFORE ALL [courses] TESTS] <---]:', true);
    // });

    it('should throw a 404 if course is not found', async function () {
        const response = await request(this.app)
            .get('/api/courses/999')
            .set('Accept', 'application/json')

        expect(response.status).to.equal(404);
        expect(response.body.message).to.equal('Cours non trouvé');
    });

    it('should succeed if course is found', async function () {
        const payload = {
            "course_title": "Les fonctions de base Word",
            "course_desc": "Comment écrire et mettre en forme un texte, comment mettre en forme les paragraphes ou imprimer, comprendre les icônes du ruban Accueil.",
            "course_tags": [
                "Word", "Bureautique"
            ],
            "course_content": "Windows vous permet d’accèder en un clic à l’aide d’un raccourci sur le bureau à un logiciel utilisé fréquemment.",
            "author_user_id": 1
        }

        const res = await request(this.app)
            .post('/api/courses')
            .send(payload)
            .expect(200);

        const courseId = res.body.course_id;

        const response = await request(this.app)
            .get('/api/courses/' + courseId)
            .set('Accept', 'application/json');

        console.log(`[{response.body}]:`, response.body);
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object').with.all.keys(["course_id","course_title","course_content","creation_date","update_date","author_user_id"]);
        expect(response.body.creation_date).to.be.a('string');
        expect(response.body.update_date).to.be.a('string');
        expect(response.body).to.equal({
            ...payload,
            course_id: courseId
        });
    });
});

   