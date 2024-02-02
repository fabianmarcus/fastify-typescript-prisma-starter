import type { BaseContext } from '@apollo/server';
import type { FastifyInstance } from 'fastify';

import { fastifyApolloDrainPlugin } from '@as-integrations/fastify';
import { ApolloServer } from '@apollo/server';

/** 
 * Gibt eine Instanz eines konfigurierten Apollo-GraphQL-Servers zurück.
 * @param fastify - Die Fastify-Instanz.
 */
export function apolloGraphQl(fastify: FastifyInstance) {
    return new ApolloServer<BaseContext>({
        typeDefs: `
            type Query {
                hello: String
            }
        `,
        resolvers: {
            Query: {
                hello: () => 'Fabian'
            }
        },
        plugins: [
            fastifyApolloDrainPlugin(fastify)
        ]
    });
}

export default apolloGraphQl;