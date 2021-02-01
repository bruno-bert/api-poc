import { AddDocument } from '@/domain/usecases'
import { DocumentMongoRepository } from '@/infra/db'
import { DbAddDocument } from '@/data/usecases'

export const makeDbAddDocument = (): AddDocument => {
  const documentMongoRepository = new DocumentMongoRepository()
  return new DbAddDocument(documentMongoRepository, documentMongoRepository)
}
