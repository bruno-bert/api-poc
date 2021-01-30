export interface CheckDocumentTypeByIdRepository {
  checkById: (id: string) => Promise<CheckDocumentTypeByIdRepository.Result>
}

export namespace CheckDocumentTypeByIdRepository {
  export type Result = boolean
}
