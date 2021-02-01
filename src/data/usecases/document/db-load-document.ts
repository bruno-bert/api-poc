import { LoadDocument } from '@/domain/usecases'
import { LoadDocumentRepository } from '@/data/protocols'

export class DbLoadDocument implements LoadDocument {
  constructor (private readonly loadDocumentRepository: LoadDocumentRepository) {}

  async load (accountId: string): Promise<LoadDocument.Result> {
    return this.loadDocumentRepository.loadAll(accountId)
  }
}
