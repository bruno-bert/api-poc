import { CheckDocumenTypeById } from '@/domain/usecases'
import { CheckDocumentTypeByIdRepository } from '@/data/protocols'

export class DbCheckDocumenTypeById implements CheckDocumenTypeById {
  constructor (private readonly checkDocumenTypeByIdRepository: CheckDocumentTypeByIdRepository) {}

  async checkById (id: string): Promise<CheckDocumenTypeById.Result> {
    return this.checkDocumenTypeByIdRepository.checkById(id)
  }
}
