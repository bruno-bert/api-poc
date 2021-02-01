export interface CheckDocumentByDirectoryRepository {
  checkByDirectory: (accountId: string, directory: string) => Promise<CheckDocumentByDirectoryRepository.Result>
}

export namespace CheckDocumentByDirectoryRepository {
  export type Result = boolean
}
