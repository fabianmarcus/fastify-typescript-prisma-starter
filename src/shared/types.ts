//--- Result Types -----

/**
 * JSON Objekt, das bei einem erfolgreichen 
 * Request zurückgegeben wird.
 */
export type ApiSuccess = {
    type: 'success' | 'failure',
    result: unknown | null
};

/**
 * Fehlerobjekt eines Server- bzw. Runtime-Fehlers.
 */
export type ServerError = {
    code: string,
    status: number,
    details: string,
    message: string,
    type: 'failure' | 'success',
};

/**
 * Custom Error, um setApiError(...) mit 
 * spezifischen Fehlermeldungen zu überschreiben.
 */
export type CustomError = {
    details?: string,
    message?: string,
};

/**
 * JSON Objekt, das bei einem fehlerhaften
 * Request zurückgegeben wird.
 */
export type ApiError = {
    'details': string,
    'error-code': string,
    'type': 'success' | 'failure',
    'userfriendly-message': string,
};

//--- Parameter Types -----

/**
 * Parameter für einen GET-Request zur Abfrage
 * eines Datensatzes per ID.
 */
export type GetById = {
    id: string;
};

/**
 * Parameter für einen GET-Request zur Abfrage
 * eines Datensatzes per Routenkopf Code.
 */
export type GetByCode = {
    code: string;
}