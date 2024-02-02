import { FastifyInstance } from 'fastify/types/instance';
import { SUCCESS } from '../../../shared/status-codes';
import { PrismaClient } from '@prisma/client';
import { FastifyServer } from '../../../app';
import request from 'supertest';

describe('API-Test', () => {
    let app: FastifyInstance;
    let prisma: PrismaClient;

    beforeAll(async () => {
        app = await FastifyServer();
        prisma = new PrismaClient();
    });
  
    afterAll(async () => {
        await app.close();
        await prisma.$disconnect();
    });
  
    it('sollte einen GET-Request an die API senden und die gewünschten Daten erhalten', async () => {

        const response = await request(app.server)
            .get('/')
            .expect(SUCCESS.normal);

        expect(response).toBeDefined();
        expect(response?.body.hallo).toBe('Yes, I am running.');
    });
});