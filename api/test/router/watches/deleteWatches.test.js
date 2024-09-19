import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestWatche } from '../../fixtures.js';

const prisma = new PrismaClient();

describe('DELETE /api/watches/courses/:course_id/users/:user_id', () => {
    let courseId = null;
    let userId =null;

    before(async () => {
        await prisma.watches.deleteMany();
        await prisma.courses.deleteMany();
        await prisma.users.deleteMany(); 
        const watche = await createTestWatche();
        courseId = watche.course_id;
        userId = watche.user_id;
        
    });

    it('should fail if watch is not found', async function () {
        const missingCourseId = 999999;
        const missingUserId = 9999;  

        const response = await request(this.app)
            .delete(`/api/watches/courses/${missingCourseId}/users/${missingUserId}`)
            

        expect(response.status).to.equal(404);
        expect(response.body).to.deep.equal({ message: 'view not found' });
    });


    it('should succeed if comment is deleted', async function () {
        const response = await request(this.app)
            .delete(`/api/watches/courses/${courseId}/users/${userId}`)
            .set('Accept', 'application/json');

        expect(response.status).to.equal(200);
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
});