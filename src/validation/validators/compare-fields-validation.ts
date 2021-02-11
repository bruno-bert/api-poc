import { Validation } from '@/presentation/protocols'
import { InvalidParamError } from '@/presentation/errors'
import { _get } from '@/data/helpers'

export class CompareFieldsValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly fieldToCompareName: string
  ) {}

  validate (input: any): Error {
    const value = _get(input, this.fieldName)
    const valueToCompare = _get(input, this.fieldToCompareName)
    if (value !== valueToCompare) {
      return new InvalidParamError(this.fieldToCompareName)
    }
  }
}
