import { ApiError, CustomError, ServerError } from "./types"

export const SUCCESS = {
  normal: 200,
  created: 201,
  nocontent: 204,
  type: 'success',
}

/**
 * Standard Errors
 */

export const ERROR400: ServerError = {
  status: 400,
  type: 'failure',
  code: 'BAD_REQUEST',
  details: 'Falsche API Anfrage. Siehe Dokumentation.',
  message: 'Die Anfrage konnte nicht verarbeitet werden.'
}

export const ERROR401: ServerError = {
  status: 401,
  type: 'failure',
  code: 'UNAUTHORIZED',
  details: 'Nicht authorisierter Zugriff.',
  message: 'Sie müssen angemeldet sein, um diese Aktion durchzuführen.',
}

export const ERROR403: ServerError = {
  status: 403,
  type: 'failure',
  code: 'FORBIDDEN_ACCESS',
  details: 'Nicht authorisierter Zugriff.',
  message: 'Sie haben keine Berechtigung für diese Aktion.',
}

export const ERROR404: ServerError = {
  status: 404,
  type: 'failure',
  code: 'NOT_FOUND',
  details: 'Der angeforderte Datensatz wurde nicht gefunden.',
  message: 'Die angeforderten Daten wurden nicht gefunden.',
}

export const ERROR409: ServerError = {
  status: 409,
  type: 'failure',
  code: 'DUPLICATE_FOUND',
  details: 'Datensatz bereits vorhanden.',
  message: 'Es besteht bereits ein Eintrag mit diesen Daten.',
}

export const ERROR500: ServerError = {
  status: 500,
  type: 'failure',
  code: 'SERVER_ERROR',
  details: 'Ein Laufzeitfehler ist aufgetreten. Siehe Server-Logs.',
  message: 'Ein unbekannter Fehler ist aufgetreten.',
}

/**
 * Custom Errors
 */

export const ERROR_UNKNOWN_ID: ServerError = {
  code: 'UNKNOWN_ID',
  type: ERROR400.type,
  status: ERROR400.status,
  message: 'Zu dieser ID liegen keine Daten vor.',
  details: 'Die ID existiert in der Datenbank nicht.',
}

export const ERROR_ROUTECODE_INVALID: ServerError = {
  type: ERROR400.type,
  status: ERROR400.status,
  code: 'INVALID_ROUTE_CODE',
  details: 'Der übergebene Code entspricht nicht dem regulären Ausdruck.',
  message: 'Ungültiger Code. Der Code muss aus 3 Buchstaben gefolgt von 3 Ziffern bestehen.',
}

export const ERROR_ROUTECODE_EXISTS: ServerError = {
  type: ERROR409.type,
  status: ERROR409.status,
  code: 'ROUTE_CODE_EXISTS',
  details: 'Routencode existiert bereits in der Datenbanktabelle.',
  message: 'Es existiert bereits eine Route mit diesem Code.',
}

/**
 * Helper Functions
 */

export function setApiError(error: ServerError, custom?: CustomError) {
  return {
    'type': error.type,
    'error-code': error.code,
    'details': custom?.details || error.details,
    'userfriendly-message': custom?.message || error.message,
  } as ApiError;
}