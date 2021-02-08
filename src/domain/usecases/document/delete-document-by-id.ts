export interface DeleteDocumentById {
  deleteById: (id: string) => Promise<DeleteDocumentById.Result>
}

export namespace DeleteDocumentById {
  export type Result = boolean
}
