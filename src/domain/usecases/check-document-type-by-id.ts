export interface CheckDocumenTypeById {
  checkById: (id: string) => Promise<CheckDocumenTypeById.Result>
}

export namespace CheckDocumenTypeById {
  export type Result = boolean
}
