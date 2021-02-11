import { Validation } from '@/presentation/protocols'
import { MissingParamError } from '@/presentation/errors'
import { _get } from '@/data/helpers'

export class RequiredFieldValidation implements Validation {
  constructor (private readonly fieldName: string) {}

  validate (input: any): Error {
    const value = _get(input, this.fieldName)
    if (!value) {
      return new MissingParamError(this.fieldName)
    }
  }
}
