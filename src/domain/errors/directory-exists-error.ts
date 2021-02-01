import { RequestError } from './request-error'
export class DirectoryExistsError extends RequestError {
  constructor () {
    super('Directory already exists')
    this.name = 'DirectoryExistsError'
  }
}
