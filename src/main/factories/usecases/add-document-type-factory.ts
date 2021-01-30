import { AddDocumentType } from '@/domain/usecases'
import { DocumentTypeMongoRepository } from '@/infra/db'
import { DbAddDocumentType } from '@/data/usecases'

export const makeDbAddDocumentType = (): AddDocumentType => {
  const documentTypeMongoRepository = new DocumentTypeMongoRepository()
  return new DbAddDocumentType(documentTypeMongoRepository, documentTypeMongoRepository)
}
