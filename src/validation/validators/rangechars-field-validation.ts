import { Validation } from '@/presentation/protocols'
import { RangeCharsParamError } from '@/presentation/errors'
import { _get } from '@/data/helpers'

export type RangeCharsType = {
  min: number
  max: number
}

export class RangeCharsFieldValidation implements Validation {
  constructor (private readonly fieldName: string, private readonly range: RangeCharsType) {}

  validate (input: any): Error {
    const value = _get(input, this.fieldName)
    if (String(value).length < this.range.min || String(value).length > this.range.max) {
      return new RangeCharsParamError(this.fieldName, `min: ${String(this.range.min)} - max: ${this.range.max}`)
    }
  }
}
