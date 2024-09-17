import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestComment } from '../../fixtures.js';

const prisma = new PrismaClient();

describe('DELETE /api/topics/:topic_id/message/:com_id', () => {
    let comId = null;

    before(async () => {
        await prisma.comments.deleteMany(); // Nettoyer la base de données de test
        const comment = await createTestComment(); // Insérer des données de test
        comId = comment.com_id;
    });

    it('should succeed if comment is deleted', async function () {
        const response = await request(this.app)
            .get(`/api/topics/${topic_id}/message/${comId}`)
            .set('Accept', 'application/json');

        expect(response.status).to.equal(200);
        expect(response.body)
            .to.be.an('object')
            .with.all.keys([
                "com_id",
                "com_title",
                "com_desc",
                "com_tags",
                "com_content",
                "author_user_id",
                "creation_date",
                "update_date"
            ]);
        expect(response.body.com_id).to.eq(comId);
        expect(response.body.com_title).to.be.a("string");
        expect(response.body.com_desc).to.be.a("string");
        expect(response.body.com_tags).to.be.a("array").lengthOf(2);
        expect(response.body.com_content).to.be.a("string");
    });
});