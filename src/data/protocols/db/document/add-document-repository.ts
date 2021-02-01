import { AddDocument } from '@/domain/usecases'
import { DocumentModel } from '@/domain/models'

export interface AddDocumentRepository {
  add: (data: AddDocumentRepository.Params) => Promise<AddDocumentRepository.Result>
}

export namespace AddDocumentRepository {
  export type Params = AddDocument.Params
  export type Result = DocumentModel
}
