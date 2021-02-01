export interface CheckDirectoryById {
  checkById: (id: string) => Promise<CheckDirectoryById.Result>
}

export namespace CheckDirectoryById {
  export type Result = boolean
}
