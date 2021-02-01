import { RequestError } from './request-error'
export class DocumentExistsError extends RequestError {
  constructor () {
    super('Document already exists')
    this.name = 'DocumentExistsError'
  }
}
