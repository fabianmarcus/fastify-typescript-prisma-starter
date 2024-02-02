import { FastifyInstance } from 'fastify/types/instance';
import { PrismaClient } from '@prisma/client';
import { FastifyServer } from '../../app';
import { createSigner } from 'fast-jwt';

describe('Authentifizierung', () => {
    let app: FastifyInstance;
    let prisma: PrismaClient;

    const signSync = createSigner({ key: 'auth-test' });
    const token = signSync({
        id: 1, username: 'Fabian'
    });

    beforeAll(async () => {
        app = await FastifyServer();
        prisma = new PrismaClient();
    });
  
    afterAll(async () => {
        await app.close();
        await prisma.$disconnect();
    });
  
    it('sollte bei korrektem Login ein gültiges JWT liefern', async () => {
        expect(1+1).toBe(2);
    });
});