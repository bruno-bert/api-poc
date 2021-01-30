import { AddDocumentType } from '@/domain/usecases'
import { AddDocumentTypeRepository, CheckDocumentTypeByDescriptionRepository } from '@/data/protocols'
import { DocumentTypeExistsError } from '@/domain/errors'

export class DbAddDocumentType implements AddDocumentType {
  constructor (private readonly addDocumentTypeRepository: AddDocumentTypeRepository,
    private readonly checkDocumentTypeByDescriptionRepository: CheckDocumentTypeByDescriptionRepository) {}

  async add (data: AddDocumentType.Params): Promise<AddDocumentType.Result> {
    const exists = await this.checkDocumentTypeByDescriptionRepository.checkByDescription(data.description)
    if (!exists) {
      return await this.addDocumentTypeRepository.add(data)
    } else {
      throw new DocumentTypeExistsError()
    }
  }
}
