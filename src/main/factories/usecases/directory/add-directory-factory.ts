import { AddDirectory } from '@/domain/usecases'
import { DocumentMongoRepository } from '@/infra/db'
import { DbAddDirectory } from '@/data/usecases'

export const makeDbAddDirectory = (): AddDirectory => {
  const documentMongoRepository = new DocumentMongoRepository()
  return new DbAddDirectory(documentMongoRepository, documentMongoRepository)
}
