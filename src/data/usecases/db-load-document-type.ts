import { LoadDocumentType } from '@/domain/usecases'
import { LoadDocumentTypeRepository } from '@/data/protocols'

export class DbLoadDocumentType implements LoadDocumentType {
  constructor (private readonly loadDocumentTypeRepository: LoadDocumentTypeRepository) {}

  async load (): Promise<LoadDocumentType.Result> {
    return this.loadDocumentTypeRepository.loadAll()
  }
}
