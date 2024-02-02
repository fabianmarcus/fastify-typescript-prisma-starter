/**
 * Parameter Schema für eine Abfrage per Code.
 */
export const codeParamSchema = {
    type: 'object',
    required: [ 'code' ],
    additionalProperties: false,
    properties: {
        code: { type: 'string', pattern: '^[0-9a-zA-Z]{1,8}$' },
    }
};