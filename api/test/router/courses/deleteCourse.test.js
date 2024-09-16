import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestCourse } from '../../fixtures.js';

const prisma = new PrismaClient();

describe('DELETE /api/courses/:course_id', () => {
    let courseId = null;

    before(async () => {
        await prisma.courses.deleteMany(); // Nettoyer la base de données de test
        const course = await createTestCourse(); // Insérer des données de test
        courseId = course.course_id;
    });

    it('should succeed if course is found', async function () {
        const response = await request(this.app)
            .get('/api/courses/' + courseId)
            .set('Accept', 'application/json');

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
        expect(response.body.course_id).to.eq(courseId);
        expect(response.body.course_title).to.be.a("string");
        expect(response.body.course_desc).to.be.a("string");
        expect(response.body.course_tags).to.be.a("array").lengthOf(2);
        expect(response.body.course_content).to.be.a("string");
    });
});

   