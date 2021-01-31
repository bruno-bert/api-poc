import { RequestError } from '@/domain/errors'

export class MissingParamError extends RequestError {
  constructor (paramName: string) {
    super(`Missing param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
