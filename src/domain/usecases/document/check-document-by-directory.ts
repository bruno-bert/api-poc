import { DirectoryModel } from '@/domain/models'

export interface CheckDocumentByDirectory {
  checkByDirectory: (accountId: string, directory: DirectoryModel) => Promise<CheckDocumentByDirectory.Result>
}

export namespace CheckDocumentByDirectory {
  export type Result = boolean
}
