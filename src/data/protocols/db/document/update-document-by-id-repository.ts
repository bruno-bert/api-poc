import { UpdateDocumentById } from '@/domain/usecases'
import { DocumentModel } from '@/domain/models'

export interface UpdateDocumentByIdRepository {
  updateById: (id: string, data: UpdateDocumentByIdRepository.Params) => Promise<UpdateDocumentByIdRepository.Result>
}

export namespace UpdateDocumentByIdRepository {
  export type Params = UpdateDocumentById.Params
  export type Result = DocumentModel
}
