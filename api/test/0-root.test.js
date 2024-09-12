import { PrismaClient } from '@prisma/client';
import { expect } from 'chai';
import dotenv from 'dotenv';
import request from 'supertest';
import app from '../app.js';
import { createTestUser } from './fixtures.js';

dotenv.config({ path: '.env.test' });
process.env.DATABASE_URL = process.env.TEST_DATABASE_URL;
const prisma = new PrismaClient();

before(async function () {
    this.app = app;
    await prisma.users.deleteMany();
    const user = await createTestUser();
    this.user_id = user.user_id;
});

describe('Test Techno\'vice', () => {
    it('should succeed for health route', async () => {
        const { body, status } = await request(app).get('/api').expect(200);
        
        expect(status).to.eq(200);
        expect(body.message).to.eq("Bienvenue sur Techno'vice API");
    });
});

