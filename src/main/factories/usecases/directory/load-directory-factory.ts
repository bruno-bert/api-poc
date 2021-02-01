import { DocumentMongoRepository } from '@/infra/db'
import { LoadDirectory } from '@/domain/usecases'
import { DbLoadDirectory } from '@/data/usecases'

export const makeDbLoadDirectory = (): LoadDirectory => {
  const documentMongoRepository = new DocumentMongoRepository()
  return new DbLoadDirectory(documentMongoRepository)
}
