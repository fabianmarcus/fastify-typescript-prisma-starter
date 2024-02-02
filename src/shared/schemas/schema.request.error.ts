//--- Allgemeine, wiederverwendbare Schemata -----

/**
 * Standard API Error, der als Schema für alle Fehlerantworten dient.
 */
export const errorSchema = {
    // Custom error properties
    'type': { type: 'string' },
    'details': { type: 'string' },
    'error-code': { type: 'string' },
    'userfriendly-message': { type: 'string' },
    // Standard error properties
    'code': { type: 'string' },
    'error': { type: 'string' },
    'message': { type: 'string' },
    'statusCode': { type: 'number' },
};