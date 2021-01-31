import { RequestError } from '@/domain/errors'

export class RangeCharsParamError extends RequestError {
  constructor (paramName: string, message: string) {
    super(`Param: ${paramName}: ${message}`)
    this.name = 'RangeCharsParamError'
  }
}
