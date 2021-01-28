import { StrongPasswordValidation } from '@/validation/validators'
import { WeakPasswordError } from '@/presentation/errors'
import { StrongPasswordValidatorSpy } from '@/tests/validation/mocks'
import { throwError } from '@/tests/domain/mocks'

import faker from 'faker'

const field = faker.random.word()

type SutTypes = {
  sut: StrongPasswordValidation
  strongPasswordValidatorSpy: StrongPasswordValidatorSpy
}

const makeSut = (): SutTypes => {
  const strongPasswordValidatorSpy = new StrongPasswordValidatorSpy()
  const sut = new StrongPasswordValidation(field, strongPasswordValidatorSpy)
  return {
    sut,
    strongPasswordValidatorSpy
  }
}

describe('Strong Password Validation', () => {
  test('Should return an error if PasswordValidator returns false', () => {
    const { sut, strongPasswordValidatorSpy } = makeSut()
    strongPasswordValidatorSpy.isPasswordValid = false
    const password = faker.internet.password()
    const error = sut.validate({ [field]: password })
    expect(error).toEqual(new WeakPasswordError(field))
  })

  test('Should throw if PasswordValidator throws', () => {
    const { sut, strongPasswordValidatorSpy } = makeSut()
    jest.spyOn(strongPasswordValidatorSpy, 'isValid').mockImplementationOnce(throwError)
    expect(sut.validate).toThrow()
  })

  test('Should call PasswordValidator with correct password', () => {
    const { sut, strongPasswordValidatorSpy } = makeSut()
    const password = faker.internet.password()
    sut.validate({ [field]: password })
    expect(strongPasswordValidatorSpy.password).toBe(password)
  })
})
