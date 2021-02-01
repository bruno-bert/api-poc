import { DocumentModel, DirectoryModel } from '@/domain/models'

export interface LoadDocumentByDirectory {
  load: (accountId: string, directory: DirectoryModel) => Promise<LoadDocumentByDirectory.Result>
}

export namespace LoadDocumentByDirectory {
  export type Result = DocumentModel[]
}
