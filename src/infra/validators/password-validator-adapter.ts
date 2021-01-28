import { PasswordValidator } from '@/validation/protocols'

import validator from 'validator'

export class PasswordValidatorAdapter implements PasswordValidator {
  isValid (password: string, rules: {}): boolean {
    return validator.isStrongPassword(password, rules)
  }
}
