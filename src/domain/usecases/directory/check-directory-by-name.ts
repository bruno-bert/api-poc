export interface CheckDirectoryByName {
  checkByName: (accountId: string, name: string) => Promise<CheckDirectoryByName.Result>
}

export namespace CheckDirectoryByName {
  export type Result = boolean
}
