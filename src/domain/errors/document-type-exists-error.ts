import { RequestError } from './request-error'
export class DocumentTypeExistsError extends RequestError {
  constructor () {
    super('Document Type already exists')
    this.name = 'DocumentTypeExistsError'
  }
}
