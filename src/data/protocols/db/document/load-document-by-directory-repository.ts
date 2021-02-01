import { DocumentModel, DirectoryModel } from '@/domain/models'

export interface LoadDocumentByDirectoryRepository {
  loadByDirectory: (accountId: string, directory: DirectoryModel) => Promise<LoadDocumentByDirectoryRepository.Result>
}

export namespace LoadDocumentByDirectoryRepository {
  export type Result = DocumentModel[]
}
