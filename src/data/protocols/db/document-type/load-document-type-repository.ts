import { DocumentTypeModel } from '@/domain/models'

export interface LoadDocumentTypeRepository {
  loadAll: (accountId: string) => Promise<LoadDocumentTypeRepository.Result>
}

export namespace LoadDocumentTypeRepository {
  export type Result = DocumentTypeModel[]
}
