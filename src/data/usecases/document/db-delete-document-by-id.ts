import { DeleteDocumentById } from '@/domain/usecases'
import { DeleteDocumentByIdRepository } from '@/data/protocols'

export class DbDeleteDocumentById implements DeleteDocumentById {
  constructor (private readonly deleteDocumentByIdRepository: DeleteDocumentByIdRepository) {}

  async deleteById (id: string): Promise<DeleteDocumentById.Result> {
    const result = this.deleteDocumentByIdRepository.deleteById(id)
    return result
  }
}
