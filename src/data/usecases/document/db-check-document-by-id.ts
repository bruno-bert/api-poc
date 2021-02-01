import { CheckDocumentById } from '@/domain/usecases'
import { CheckDocumentByIdRepository } from '@/data/protocols'

export class DbCheckDocumentById implements CheckDocumentById {
  constructor (private readonly checkDocumentByIdRepository: CheckDocumentByIdRepository) {}

  async checkById (id: string): Promise<CheckDocumentById.Result> {
    return this.checkDocumentByIdRepository.checkById(id)
  }
}
