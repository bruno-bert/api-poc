import { DocumentModel } from '@/domain/models'

export interface AddDocument {
  add: (data: AddDocument.Params) => Promise<AddDocument.Result>
}

export namespace AddDocument {
  export type Params = Omit<DocumentModel, 'id'> & { accountId: string}
  export type Result = DocumentModel
}
