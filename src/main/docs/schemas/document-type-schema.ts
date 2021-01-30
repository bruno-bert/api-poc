export const documentTypeSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    date: {
      type: 'string'
    }
  },
  required: ['id', 'description','date']
}
