import { PasswordValidatorAdapter } from '@/infra/validators'

import validator from 'validator'

jest.mock('validator', () => ({
  isStrongPassword (): boolean {
    return true
  }
}))

const makeSut = (): PasswordValidatorAdapter => {
  return new PasswordValidatorAdapter()
}

describe('StrongPasswordValidatorAdapter', () => {
  test('Should return false if validator returns false', () => {
    const sut = makeSut()
    jest.spyOn(validator, 'isStrongPassword').mockReturnValueOnce(false)
    const isValid = sut.isValid('weak_password', {})
    expect(isValid).toBe(false)
  })

  test('Should return true if validator returns true', () => {
    const sut = makeSut()
    const isValid = sut.isValid('strong_password', {})
    expect(isValid).toBe(true)
  })

  test('Should call validator with correct password', () => {
    const sut = makeSut()
    const isStrongPasswordSpy = jest.spyOn(validator, 'isStrongPassword')
    sut.isValid('any_password')
    expect(isStrongPasswordSpy).toHaveBeenCalledWith('any_password')
  })

/*   test('Should return true if password is strong', () => {
    const sut = makeSut()
    jest.unmock('validator')
    const isValid = sut.isValid('@Indjhkls_223')
    expect(isValid).toBe(true)
  })

  test('Should return false if password is weak', () => {
    const sut = makeSut()
    jest.unmock('validator')
    const isValid = sut.isValid('12345')
    expect(isValid).toBe(false)
  }) */
})
