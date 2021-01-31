import { RequestError } from '@/domain/errors'

export class InvalidParamError extends RequestError {
  constructor (paramName: string) {
    super(`Invalid param: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
