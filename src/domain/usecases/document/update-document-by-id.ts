import { DocumentModel } from '@/domain/models'

export interface UpdateDocumentById {
  updateById: (id: string, data: UpdateDocumentById.Params) => Promise<UpdateDocumentById.Result>
}

export namespace UpdateDocumentById {
  export type Params = Omit<DocumentModel, 'id'> & { accountId: string}
  export type Result = DocumentModel
}
