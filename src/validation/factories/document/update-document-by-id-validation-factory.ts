import { ValidationComposite, RequiredFieldValidation, RangeCharsFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeUpdateDocumentByIdValidation = (): ValidationComposite => {
  const validations: Validation[] = []

  for (const field of ['name']) {
    validations.push(new RequiredFieldValidation(field))
    validations.push(new RangeCharsFieldValidation(field, { min: 3, max: 20 }))
  }

  for (const field of ['id', 'directory.name', 'documentType.description']) {
    validations.push(new RequiredFieldValidation(field))
  }

  return new ValidationComposite(validations)
}
