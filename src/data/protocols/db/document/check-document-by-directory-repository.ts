import { DirectoryModel } from '@/domain/models'

export interface CheckDocumentByDirectoryRepository {
  checkByDirectory: (accountId: string, directory: DirectoryModel) => Promise<CheckDocumentByDirectoryRepository.Result>
}

export namespace CheckDocumentByDirectoryRepository {
  export type Result = boolean
}
