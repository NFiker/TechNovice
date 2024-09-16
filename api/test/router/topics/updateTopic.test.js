import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import request from 'supertest';
import { createTestTopic } from '../../fixtures.js';

const prisma = new PrismaClient();

describe('PATCH /api/topics/:topic_id', () => {
    
    let topicId = null;

    before(async () => {
        await prisma.topics.deleteMany(); // Nettoyer la base de données de test
        const topic = await createTestTopic(); // Insérer des données de test
        topicId = topic.topic_id;
    });

    const payload = {
        "topic_id": 1,
        "topic_title": "Comment faire pour que les pages soient pré-numérotés à l'ouverture d'un document vierge ?",
        "topic_tag": [
              "word", "numérotés"
        ],
        "topic_content": "Bonjour, j'ai besoin que ce soit automatique. Merci de me dire si cela est possible ou faut-il le faire manuellement chaque fois ?",
        "author_user_id": 1
    }

    it('should succeed if topic is changed', async function ()  {
        const response = await request(this.app)
            .patch('/api/topics/' + topicId)
            .send(payload)
            .expect(200);
            
            expect(response.status).to.equal(200);
            expect(response.body)
                .to.be.an('object')
                .with.all.keys([
                    "topic_id",
                    "topic_title",
                    "topic_tag",
                    "topic_content",
                    "author_user_id",
                    "topic_date",
                   
                ]);
            expect(response.body.topic_id).to.eq(topicId);
            expect(response.body.topic_title).to.be.a("string");
            expect(response.body.topic_tag).to.be.a("array").lengthOf(2);
            expect(response.body.topic_content).to.be.a("string");
            expect(response.body.author_user_id).to.be.a("number");
           
        })
    });

