import { expect } from 'chai';
import request from 'supertest';
import app from '../app.js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.test' });
process.env.DATABASE_URL = process.env.TEST_DATABASE_URL;

before(function () {
    this.app = app;
});

describe('Test Techno\'vice', () => {
    it('should succeed for health route', async () => {
        const { body, status } = await request(app).get('/api').expect(200);
        
        expect(status).to.eq(200);
        expect(body.message).to.eq("Bienvenue sur Techno'vice API");
    });
});

