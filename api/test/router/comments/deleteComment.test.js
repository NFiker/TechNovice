import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestComment } from '../../fixtures.js';


const prisma = new PrismaClient();

describe('DELETE /api/topics/:topic_id/message/:com_id', () => {
    let comId = null;
    let topicId = null;

    before(async () => {
        await prisma.comments.deleteMany(); 
        await prisma.topics.deleteMany();
        const comment = await createTestComment(); 
        comId = comment.com_id;
        topicId = comment.topic_id;
        
    });

    it('should fail if comment is not found', async function () {
        const missingComId = 999999; // Un ID qui n'existe pas

        const response = await request(this.app)
            .delete(`/api/topics/message/${missingComId}`)
            // .set('Accept', 'application/json');

        expect(response.status).to.equal(404);
        expect(response.body).to.deep.equal({ message: 'Commentaire non trouvé' });
    });


    it('should succeed if comment is deleted', async function () {
        const response = await request(this.app)
            .delete(`/api/topics/message/${comId}`)
            .set('Accept', 'application/json');

        expect(response.status).to.equal(200);
        expect(response.body)
            .to.be.an('object')
            .with.all.keys([
                "com_id",
                "topic_id",
                "com_date",
                "com_content",
                "author_user_id",
                
            ]);
        expect(response.body.com_id).to.eq(comId);
        expect(response.body.topic_id).to.not.be.null;
        expect(response.body.com_content).to.be.a("string");
        expect(response.body.author_user_id).to.be.a("number");
    });
});