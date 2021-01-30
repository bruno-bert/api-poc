import { DocumentTypeModel } from '@/domain/models'

export interface LoadDocumentType {
  load: (accountId: string) => Promise<LoadDocumentType.Result>
}

export namespace LoadDocumentType {
  export type Result = DocumentTypeModel[]
}
