export interface CheckDocumentTypeByDescriptionRepository {
  checkByDescription: (id: string) => Promise<CheckDocumentTypeByDescriptionRepository.Result>
}

export namespace CheckDocumentTypeByDescriptionRepository {
  export type Result = boolean
}
