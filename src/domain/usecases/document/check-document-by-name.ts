export interface CheckDocumentByName {
  checkByName: (accountId: string, name: string) => Promise<CheckDocumentByName.Result>
}

export namespace CheckDocumentByName {
  export type Result = boolean
}
