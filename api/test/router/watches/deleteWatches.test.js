import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestWatche } from '../../fixtures.js';

const prisma = new PrismaClient();

describe('DELETE /api/watches/courses/:course_id/users/user_id', () => {
    let courseId = null;
    let userId = null;


    before(async () => {
        await prisma.courses.deleteMany(); // Nettoyer la base de données de test
        const course = await createTestWatche(); // Insérer des données de test
        courseId = course.course_id;
    });

    it('should succeed if course is deleted', async function () {
        const response = await request(this.app)
            .get(`/api/watches/courses/${courseId}/users/${userId}`)
            .set('Accept', 'application/json');

        expect(response.status).to.equal(200);
        expect(response.body)
            .to.be.an('object')
            .with.all.keys([
                "course_id",
                "users"
            ]);

        expect(response.body.course_id).to.eq(courseId);
        expect(response.body.users).to.be.a(userId);
    });
});

   