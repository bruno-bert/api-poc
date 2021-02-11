import { EmailValidator } from '@/validation/protocols'
import { Validation } from '@/presentation/protocols'
import { InvalidParamError } from '@/presentation/errors'
import { _get } from '@/data/helpers'

export class EmailValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly emailValidator: EmailValidator
  ) {}

  validate (input: any): Error {
    const value = _get(input, this.fieldName)
    const isValid = this.emailValidator.isValid(value)
    if (!isValid) {
      return new InvalidParamError(this.fieldName)
    }
  }
}
