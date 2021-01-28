import { PasswordValidator } from '@/validation/protocols'

import validator from 'validator'

export class PasswordValidatorAdapter implements PasswordValidator {
  isValid (password: string, rules?: {}): boolean {
    if (rules) return validator.isStrongPassword(password, rules)
    else { return validator.isStrongPassword(password) }
  }
}
