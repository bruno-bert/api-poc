import { DocumentTypeModel } from '@/domain/models'

export interface LoadDocumentTypeRepository {
  loadAll: () => Promise<LoadDocumentTypeRepository.Result>
}

export namespace LoadDocumentTypeRepository {
  export type Result = DocumentTypeModel[]
}
