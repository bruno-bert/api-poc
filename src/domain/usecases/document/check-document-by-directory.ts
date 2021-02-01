export interface CheckDocumentByDirectory {
  checkByDirectory: (accountId: string, directory: string) => Promise<CheckDocumentByDirectory.Result>
}

export namespace CheckDocumentByDirectory {
  export type Result = boolean
}
