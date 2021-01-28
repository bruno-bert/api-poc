import { PasswordValidator } from '@/validation/protocols'

export class StrongPasswordValidatorSpy implements PasswordValidator {
  isPasswordValid = true
  password: string

  isValid (password: string): boolean {
    this.password = password
    return this.isPasswordValid
  }
}
