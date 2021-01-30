import { DocumentTypeModel } from '@/domain/models'

export interface LoadDocumentTypeByIdRepository {
  loadById: (id: string) => Promise<LoadDocumentTypeByIdRepository.Result>
}

export namespace LoadDocumentTypeByIdRepository {
  export type Result = DocumentTypeModel
}
