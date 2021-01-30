export class RangeCharsParamError extends Error {
  constructor (paramName: string, message: string) {
    super(`Param: ${paramName}: ${message}`)
    this.name = 'RangeCharsParamError'
  }
}
