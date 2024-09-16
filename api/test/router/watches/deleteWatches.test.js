import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestWatches } from '../../fixtures.js';

const prisma = new PrismaClient();

describe('DELETE /api/watches/courses/:course_id(\\d+)/users/:author_user_id(\\d+)', () => {
    let courseId = null;

    before(async () => {
        await prisma.courses.deleteMany(); // Nettoyer la base de données de test
        const course = await createTestWatches(); // Insérer des données de test
        courseId = course.course_id;
    });

    it('should succeed if course is found', async function () {
        const response = await request(this.app)
            .get('/api/watches/courses/:course_id(\\d+)/users/:author_user_id(\\d+)' + courseId)
            .set('Accept', 'application/json');

        expect(response.status).to.equal(200);
        expect(response.body)
            .to.be.an('object')
            .with.all.keys([
                "course_id",
                "author_user_id"
            ]);

        expect(response.body.course_id).to.eq(courseId);
        expect(response.body.author_user_id).to.be.a("number");
    });
});

   