import { DocumentModel } from '@/domain/models'

export interface LoadDocument {
  load: (accountId: string) => Promise<LoadDocument.Result>
}

export namespace LoadDocument {
  export type Result = DocumentModel[]
}
