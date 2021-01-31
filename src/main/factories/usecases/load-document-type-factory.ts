import { DocumentTypeMongoRepository } from '@/infra/db'
import { LoadDocumentType } from '@/domain/usecases'
import { DbLoadDocumentType } from '@/data/usecases'

export const makeDbLoadDocumentType = (): LoadDocumentType => {
  const documentTypeMongoRepository = new DocumentTypeMongoRepository()
  return new DbLoadDocumentType(documentTypeMongoRepository)
}
