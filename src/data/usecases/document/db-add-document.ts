import { AddDocument } from '@/domain/usecases'
import { AddDocumentRepository, CheckDocumentByNameRepository } from '@/data/protocols'
import { DocumentExistsError } from '@/domain/errors'

export class DbAddDocument implements AddDocument {
  constructor (private readonly addDocumentRepository: AddDocumentRepository,
    private readonly checkDocumentByNameRepository: CheckDocumentByNameRepository) {}

  async add (data: AddDocument.Params): Promise<AddDocument.Result> {
    const exists = await this.checkDocumentByNameRepository.checkByName(data.accountId, data.name)
    if (!exists) {
      return await this.addDocumentRepository.add(data)
    } else {
      throw new DocumentExistsError()
    }
  }
}
