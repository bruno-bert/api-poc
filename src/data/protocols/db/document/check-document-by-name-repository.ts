export interface CheckDocumentByNameRepository {
  checkByName: (accountId: string, name: string) => Promise<CheckDocumentByNameRepository.Result>
}

export namespace CheckDocumentByNameRepository {
  export type Result = boolean
}
