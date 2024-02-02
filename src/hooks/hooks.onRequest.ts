import { ERROR400, ERROR401, ERROR500, setApiError } from "../shared/status-codes";
import { verifyJwt } from "./handlers/handlers.verifyJwt";
import { FastifyRequest, FastifyReply } from "fastify";
import { ServerError } from "../shared/types";

//--- Hook -----

export async function authenticate(req: FastifyRequest, reply: FastifyReply) {

    // Token aus den Request Headers abfragen
    const token = req.headers.authorization?.split(' ')[1];

    try {
        // Wird keine Exception geschmissen, 
        // geht es weiter zum Routen Handler.
        return verifyJwt(token);
    } catch(e) {
        const error = (e || {}) as ServerError;
        if(error.status === ERROR401.status) {
            return reply.code(ERROR401.status).send(setApiError(ERROR401));
        } else if(error.status === ERROR400.status) {
            return reply.code(ERROR400.status).send(setApiError(ERROR400));
        }
        return reply.code(ERROR500.status).send(setApiError(ERROR500));
    }
}

export default authenticate;