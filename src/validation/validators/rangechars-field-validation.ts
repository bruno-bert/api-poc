import { Validation } from '@/presentation/protocols'
import { RangeCharsParamError } from '@/presentation/errors'

export type RangeCharsType = {
  min: number
  max: number
}

export class RangeCharsFieldValidation implements Validation {
  constructor (private readonly fieldName: string, private readonly range: RangeCharsType) {}

  validate (input: any): Error {
    if (String(input[this.fieldName]).length < this.range.min || String(input[this.fieldName]).length > this.range.max) {
      return new RangeCharsParamError(this.fieldName, `min: ${String(this.range.min)} - max: ${this.range.max}`)
    }
  }
}
