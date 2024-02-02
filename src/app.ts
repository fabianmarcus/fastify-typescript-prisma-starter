import { SwaggerConfig, SwaggerUIConfig } from './shared/swagger';
import fastifyApollo from '@as-integrations/fastify';
import SwaggerUI from '@fastify/swagger-ui';
import Swagger from '@fastify/swagger';
import apolloGraphQl from './graphql';
import Cors from '@fastify/cors';
import Fastify from "fastify";

//--- Hooks -----

import { authenticate } from './hooks/hooks.onRequest';

//--- Routes -----

import { indexRoutes } from './routes/routes';

//--- Start -----

export const FastifyServer = async () => {
    const { NODE_ENV } = process.env;

    const fastify = Fastify({ logger: true });
    const apollo = apolloGraphQl(fastify);

    try {
        //--- GraphQL Server starten -----
        await apollo.start();

        //--- Cors -----
        fastify.register(Cors);

        //--- Swagger / Dokumentation -----
        fastify.register(Swagger, SwaggerConfig);
        fastify.register(SwaggerUI, SwaggerUIConfig);

        //--- Hooks für alle Routen -----
        if(NODE_ENV !== 'test' && NODE_ENV !== 'development') {
            fastify.addHook('onRequest', authenticate);
        }

        //--- Routing -----
        fastify.register(indexRoutes);

        //--- GraphQL -----
        fastify.register(fastifyApollo(apollo));

        // Warten bis alle register() durch sind
        await fastify.ready();
        
        return fastify;
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
