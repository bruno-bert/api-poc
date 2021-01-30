import { ValidationComposite, RequiredFieldValidation, RangeCharsFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeAddDocumentTypeValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['description']) {
    validations.push(new RequiredFieldValidation(field))
    validations.push(new RangeCharsFieldValidation(field, { min: 5, max: 20 }))
  }
  return new ValidationComposite(validations)
}
