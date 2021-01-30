export const documentTypePath = {
  get: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['Document Type'],
    summary: 'API to list all document types',
    description: 'This route can only be executed by **authenticated users**',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/document-type'
            }
          }
        }
      },
      204: {
        description: 'Success, but no content to return'
      },
      403: {
        $ref: '#/components/forbidden'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  },
  post: {
    security: [{
      apiKeyAuth: []
    }],
    tags: ['Document Type'],
    summary: 'API to create document types',
    description: 'This route can only be executed by **administrators**',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/addDocumentTypeParams'
          }
        }
      }
    },
    responses: {
      204: {
        description: 'Success, but no content to return'
      },
      403: {
        $ref: '#/components/forbidden'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
