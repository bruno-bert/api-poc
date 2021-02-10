import { UpdateDocumentById } from '@/domain/usecases'
import { DocumentMongoRepository } from '@/infra/db'
import { DbUpdateDocumentById } from '@/data/usecases'

export const makeDbUpdateDocumentById = (): UpdateDocumentById => {
  const documentMongoRepository = new DocumentMongoRepository()
  return new DbUpdateDocumentById(documentMongoRepository)
}
