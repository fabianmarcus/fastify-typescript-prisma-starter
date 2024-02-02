import { FastifyServer } from './app';

//--- Start -----

FastifyServer().then(async (server) => {
    const { RP_PORT, RP_HOST } = process.env;

    try {
        //--- Server starten -----
        await server.listen({
            host: RP_HOST ? RP_HOST : 'localhost',
            port: RP_PORT ? parseInt(RP_PORT) : 3000,
        });
    
        //--- Doku Tool (Swagger) starten -----
        server.swagger();
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
});
