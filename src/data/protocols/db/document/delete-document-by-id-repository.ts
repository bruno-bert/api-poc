export interface DeleteDocumentByIdRepository {
  deleteById: (id: string) => Promise<DeleteDocumentByIdRepository.Result>
}

export namespace DeleteDocumentByIdRepository {
  export type Result = boolean
}
