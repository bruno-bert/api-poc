import { AddDocumentType } from '@/domain/usecases'
import { DocumentTypeModel } from '@/domain/models'

export interface AddDocumentTypeRepository {
  add: (data: AddDocumentTypeRepository.Params) => Promise<AddDocumentTypeRepository.Result>
}

export namespace AddDocumentTypeRepository {
  export type Params = AddDocumentType.Params
  export type Result = DocumentTypeModel
}
