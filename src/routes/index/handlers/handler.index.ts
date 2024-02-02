import { FastifyReply, FastifyRequest } from "fastify";
import { ERROR500 } from "../../../shared/status-codes";

export const handler  = async (_request: FastifyRequest, reply: FastifyReply) => {
    try {
        reply.status(200).send({ hallo: "Yes, I am running." });
    } catch(e) {
        reply.status(ERROR500.status).send(ERROR500.message);
    }
};

export default handler;