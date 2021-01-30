export interface CheckDocumentTypeByDescription {
  checkByDescription: (id: string) => Promise<CheckDocumentTypeByDescription.Result>
}

export namespace CheckDocumentTypeByDescription {
  export type Result = boolean
}
