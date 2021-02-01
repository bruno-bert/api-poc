import { DocumentModel } from '@/domain/models'

export interface LoadDocumentByDirectory {
  load: (accountId: string, directory: string) => Promise<LoadDocumentByDirectory.Result>
}

export namespace LoadDocumentByDirectory {
  export type Result = DocumentModel[]
}
