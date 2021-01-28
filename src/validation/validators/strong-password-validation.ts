import { PasswordValidator } from '@/validation/protocols'
import { Validation } from '@/presentation/protocols'
import { WeakPasswordError } from '@/presentation/errors'

export class StrongPasswordValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly passwordValidator: PasswordValidator
  ) {}

  validate (input: any): Error {
    const rules = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      returnScore: false,
      pointsPerUnique: 1,
      pointsPerRepeat: 0.5,
      pointsForContainingLower: 10,
      pointsForContainingUpper: 10,
      pointsForContainingNumber: 10,
      pointsForContainingSymbol: 10
    }

    const isValid = this.passwordValidator.isValid(input[this.fieldName], rules)
    if (!isValid) {
      return new WeakPasswordError(this.fieldName)
    }
  }
}
