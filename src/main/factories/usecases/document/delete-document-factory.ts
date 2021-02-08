import { DeleteDocumentById } from '@/domain/usecases'
import { DocumentMongoRepository } from '@/infra/db'
import { DbDeleteDocumentById } from '@/data/usecases'

export const makeDbDeleteDocument = (): DeleteDocumentById => {
  const documentMongoRepository = new DocumentMongoRepository()
  return new DbDeleteDocumentById(documentMongoRepository)
}
