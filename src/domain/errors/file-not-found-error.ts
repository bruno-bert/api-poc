import { RequestError } from './request-error'
export class FileNotFoundError extends RequestError {
  constructor () {
    super('File not found')
    this.name = 'FileNotFoundError'
  }
}
