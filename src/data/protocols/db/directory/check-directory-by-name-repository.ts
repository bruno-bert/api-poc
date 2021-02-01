export interface CheckDirectoryByNameRepository {
  checkByName: (accountId: string, name: string) => Promise<CheckDirectoryByNameRepository.Result>
}

export namespace CheckDirectoryByNameRepository {
  export type Result = boolean
}
