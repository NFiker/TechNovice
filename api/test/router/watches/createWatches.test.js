import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestWatche } from '../../fixtures.js';

const prisma = new PrismaClient();

describe('POST /api/watches/courses/:course_id/users/:user_id',  () => {

    let courseId = null;
    let userId =null;

    const payload = {
        "course_id": 1,
        "user_id": 1,
    };

    beforeEach(async () => {
        await prisma.watches.deleteMany();
        await prisma.courses.deleteMany();
        await prisma.users.deleteMany(); 
        const watche = await createTestWatche();
        courseId = watche.course_id;
        userId = watche.user_id;
    });

    it('should fail if course is not found', async function () {
        const badPayload = { ...payload };
        badPayload.course_id = 999999; 
        const response = await request(this.app)
            .post(`/api/watches/courses/${ badPayload.course_id}/users/${userId}`)
            .send(badPayload);
       
            
        expect(response.status).to.equal(404);
        expect(response.body).to.deep.equal({ error: 'Cours non trouvé.' });
;
    });

    it('should fail if user is not found', async function () {
        const badPayload = { ...payload };
        badPayload.user_id = 9; 

        const response = await request(this.app)
            .post(`/api/watches/courses/${courseId}/users/${badPayload.user_id}`)
            .send(badPayload);

        expect(response.status).to.equal(404);
        expect(response.body).to.deep.equal({ error: 'Utilisateur non trouvé.' });
    });

    it('should succeed if watche is created', async function () {
    // Supprimer les données existantes pour éviter les conflits
        await prisma.watches.deleteMany({
            where: {
                course_id: courseId,
                user_id: userId
            }
        });

        const response = await request(this.app)
            .post(`/api/watches/courses/${courseId}/users/${userId}`)
            .send(payload)
            .expect(201);

        expect(response.status).to.equal(201);
        expect(response.body)
            .to.be.an('object')
            .with.all.keys([
                "course_id",
                "user_id",
                "start_date"
            ]);

        expect(response.body.course_id).to.eq(courseId);
        expect(response.body.user_id).to.eq(userId);
    });
})