import { RequestError } from '@/domain/errors'

export class EmailInUseError extends RequestError {
  constructor () {
    super('The received email is already in use')
    this.name = 'EmailInUseError'
  }
}
