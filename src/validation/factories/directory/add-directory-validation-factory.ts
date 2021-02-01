import { ValidationComposite, RequiredFieldValidation, RangeCharsFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeAddDirectoryValidation = (): ValidationComposite => {
  const validations: Validation[] = []

  for (const field of ['name']) {
    validations.push(new RequiredFieldValidation(field))
    validations.push(new RangeCharsFieldValidation(field, { min: 1, max: 20 }))
  }

  return new ValidationComposite(validations)
}
