import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestWatche } from '../../fixtures.js';

const prisma = new PrismaClient();

describe.only('POST /api/watches/courses/:course_id/users/:user_id',  () => {

    let courseId = null;
    let userId = null;

    const payload = {
        "course_id": 1,
        "user_id": 1,
    };

    beforeEach(async () => {
        await prisma.courses.deleteMany();
        await prisma.users.deleteMany(); 
        const watche = await createTestWatche();

        courseId = watche.course_id;
        userId = watche.user_id;
    });

    after(async () => {
        await prisma.$disconnect();
    });

    it('should fail if course is not found', async function () {
        const badPayload = { ...payload };
        badPayload.course_id = 999999; 

        const response = await request(this.app)
            .post(`/api/watches/courses/${courseId}/users/${userId}`)
            .send(badPayload);

        expect(response.status).to.equal(404);
        expect(response.body).to.deep.equal({ error: 'Cours non trouvé.' });
    });

    it('should fail if user is not found', async function () {
        const badPayload = { ...payload };
        badPayload.user_id = 9; 

        const response = await request(this.app)
            .post(`/api/watches/courses/${courseId}/users/${userId}`)
            .send(badPayload);

        expect(response.status).to.equal(404);
        expect(response.body).to.deep.equal({ error: 'Utilisateur non trouvé.' });
    });


    it('should succeed if comment is created', async function ()  {
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
                "start_date",
            ]);

        expect(response.body.course_id).to.eq(courseId);
        expect(response.body.user_id).to.eq(userId);
        
    });
});