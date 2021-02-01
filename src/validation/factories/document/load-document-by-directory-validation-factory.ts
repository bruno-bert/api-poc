import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols'

export const makeLoadDocumentByDirectoryValidation = (): ValidationComposite => {
  const validations: Validation[] = []

  for (const field of ['directory']) {
    validations.push(new RequiredFieldValidation(field))
  }

  return new ValidationComposite(validations)
}
