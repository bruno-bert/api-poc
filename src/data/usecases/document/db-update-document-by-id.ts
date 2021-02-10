import { UpdateDocumentById } from '@/domain/usecases'
import { UpdateDocumentByIdRepository } from '@/data/protocols'

export class DbUpdateDocumentById implements UpdateDocumentById {
  constructor (private readonly updateDocumentByIdRepository: UpdateDocumentByIdRepository) {}

  async updateById (id: string, data: UpdateDocumentById.Params): Promise<UpdateDocumentById.Result> {
    const result = await this.updateDocumentByIdRepository.updateById(id, data)
    return result
  }
}
