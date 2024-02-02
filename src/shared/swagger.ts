import { FastifySwaggerUiOptions } from "@fastify/swagger-ui";

export const SwaggerConfig = {
    swagger: {
        info: {
            version: '1.0.0',
            title: 'API Beschreibung',
            description: 'Eine Übersicht aller zur Verfügung stehenden Endpunkte zum Auslesen, Speichern, Verändern und/oder Löschen von API-Daten.',
        },
        host: 'localhost',
        schemes: ['https'],
        consumes: ['application/json'],
        produces: ['application/json'],
    }
};

export const SwaggerUIConfig: FastifySwaggerUiOptions = {
    routePrefix: '/docs',
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false,
    }
};