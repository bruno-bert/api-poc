export interface CheckDocumentByIdRepository {
  checkById: (id: string) => Promise<CheckDocumentByIdRepository.Result>
}

export namespace CheckDocumentByIdRepository {
  export type Result = boolean
}
