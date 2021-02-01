import { DocumentModel } from '@/domain/models'

export interface LoadDocumentByDirectoryRepository {
  loadByDirectory: (accountId: string, directory: string) => Promise<LoadDocumentByDirectoryRepository.Result>
}

export namespace LoadDocumentByDirectoryRepository {
  export type Result = DocumentModel[]
}
