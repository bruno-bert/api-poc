import { CheckDocumentTypeByDescription } from '@/domain/usecases'
import { CheckDocumentTypeByDescriptionRepository } from '@/data/protocols'

export class DbCheckDocumentTypeByDescription implements CheckDocumentTypeByDescription {
  constructor (private readonly checkDocumenTypeByDescriptionRepository: CheckDocumentTypeByDescriptionRepository) {}

  async checkByDescription (description: string): Promise<CheckDocumentTypeByDescription.Result> {
    return this.checkDocumenTypeByDescriptionRepository.checkByDescription(description)
  }
}
