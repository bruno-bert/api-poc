export interface CheckDocumentById {
  checkById: (id: string) => Promise<CheckDocumentById.Result>
}

export namespace CheckDocumentById {
  export type Result = boolean
}
