export const GetSchema = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    'hallo': {
                        type: 'string'
                    }
                }
            }
        }
    }
};

export default GetSchema;