import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestCourse } from '../../fixtures.js';

const prisma = new PrismaClient();

describe('POST /api/courses/', () => {
   
    before(async () => {
        await prisma.courses.deleteMany(); // Nettoyer la base de données de test
        await createTestCourse(); // Insérer des données de test
       
    });
    const payload = {
        "course_title": "Les fonctions de base Word ",
        "course_desc": "Comment écrire et mettre en forme un texte, comment mettre en forme les paragraphes ou imprimer, comprendre les icônes du ruban Accueil.",
        "course_tags": [
            "Word", "Bureautique"
        ],
        "course_content": "Windows vous permet d’accèder en un clic à l’aide d’un raccourci sur le bureau à un logiciel utilisé fréquemment.",
        "author_user_id": 1
    }
    it('should succeed if course is found', async function ()  {
        const response = await request(this.app)
            .post('/api/courses/')
            .send(payload)
            .expect(200);

            expect(response.status).to.equal(200);
            expect(response.body)
                .to.be.an('object')
                .with.all.keys([
                    "course_id",
                    "course_title",
                    "course_desc",
                    "course_tags",
                    "course_content",
                    "author_user_id",
                    "creation_date", 
                    "update_date"
                ]);
            expect(response.body.course_id).to.not.be.null;
            expect(response.body.course_title).to.be.a("string");
            expect(response.body.course_desc).to.be.a("string");
            expect(response.body.course_tags).to.be.a("array").lengthOf(2);
            expect(response.body.course_content).to.be.a("string");
            expect(response.body.author_user_id).to.be.a("number");
        });
    });

