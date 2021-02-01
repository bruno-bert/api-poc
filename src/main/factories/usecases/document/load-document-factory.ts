import { DocumentMongoRepository } from '@/infra/db'
import { LoadDocument } from '@/domain/usecases'
import { DbLoadDocument } from '@/data/usecases'

export const makeDbLoadDocument = (): LoadDocument => {
  const documentMongoRepository = new DocumentMongoRepository()
  return new DbLoadDocument(documentMongoRepository)
}
