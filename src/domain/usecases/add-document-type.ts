import { DocumentTypeModel } from '@/domain/models'

export interface AddDocumentType {
  add: (data: AddDocumentType.Params) => Promise<AddDocumentType.Result>
}

export namespace AddDocumentType {
  export type Params = Omit<DocumentTypeModel, 'id'>
  export type Result = DocumentTypeModel
}
