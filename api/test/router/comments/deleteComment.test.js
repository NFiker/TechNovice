import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestComment } from '../../fixtures.js';

const prisma = new PrismaClient();

describe.only('DELETE /api/topics/message/:com_id', () => {
    let commentId = null;

    before(async () => {
        await prisma.comments.deleteMany(); // Nettoyer la base de données de test
        const comment = await createTestComment(); // Insérer des données de test
        commentId = comment.comment_id;
    });

    it('should succeed if comment is deleted', async function () {
        const response = await request(this.app)
            .get('/api/topics/message/' + commentId)
            .set('Accept', 'application/json');

        expect(response.status).to.equal(200);
        expect(response.body)
            .to.be.an('object')
            .with.all.keys([
                "comment_id",
                "comment_title",
                "comment_desc",
                "comment_tags",
                "comment_content",
                "author_user_id",
                "creation_date",
                "update_date"
            ]);
        expect(response.body.comment_id).to.eq(commentId);
        expect(response.body.comment_title).to.be.a("string");
        expect(response.body.comment_desc).to.be.a("string");
        expect(response.body.comment_tags).to.be.a("array").lengthOf(2);
        expect(response.body.comment_content).to.be.a("string");
    });
});