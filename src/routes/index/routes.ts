import handler from "./handlers/handler.index";
import GetSchema from "./schemas/schema.Get";
import { FastifyInstance } from "fastify";

//--- ROUTE -----

export async function routes(fastify: FastifyInstance) {

    fastify.get('/', GetSchema, handler);
}

export default routes;