/**
 * Parameter Schema für eine Abfrage per ID.
 */
export const idParamSchema = {
    type: 'object',
    required: [ 'id' ],
    additionalProperties: false,
    properties: {
        id: { type: 'string', pattern: '^[0-9]{1,5}$' },
    }
};