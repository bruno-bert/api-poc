
export class DocumentTypeExistsError extends Error {
  constructor () {
    super('Document Type already exists')
    this.name = 'DocumentTypeExistsError'
  }
}
