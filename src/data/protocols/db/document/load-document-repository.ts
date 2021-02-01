import { DocumentModel } from '@/domain/models'

export interface LoadDocumentRepository {
  loadAll: (accountId: string) => Promise<LoadDocumentRepository.Result>
}

export namespace LoadDocumentRepository {
  export type Result = DocumentModel[]
}
