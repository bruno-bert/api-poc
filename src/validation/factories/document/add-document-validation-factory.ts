import { ValidationComposite, RequiredFieldValidation, RangeCharsFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeAddDocumentValidation = (): ValidationComposite => {
  const validations: Validation[] = []

  for (const field of ['name', 'path']) {
    validations.push(new RequiredFieldValidation(field))
    validations.push(new RangeCharsFieldValidation(field, { min: 3, max: 20 }))
  }

  for (const field of ['path', 'directory', 'documentType']) {
    validations.push(new RequiredFieldValidation(field))
  }

  return new ValidationComposite(validations)
}