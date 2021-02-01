import { DocumentModel } from '@/domain/models'

export interface LoadDocumentByIdRepository {
  loadById: (id: string) => Promise<LoadDocumentByIdRepository.Result>
}

export namespace LoadDocumentByIdRepository {
  export type Result = DocumentModel
}
