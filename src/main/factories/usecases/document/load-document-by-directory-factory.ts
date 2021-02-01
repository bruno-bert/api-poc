import { DocumentMongoRepository } from '@/infra/db'
import { LoadDocumentByDirectory } from '@/domain/usecases'
import { DbLoadDocumentByDirectory } from '@/data/usecases'

export const makeDbLoadDocumentByDirectory = (): LoadDocumentByDirectory => {
  const documentMongoRepository = new DocumentMongoRepository()
  return new DbLoadDocumentByDirectory(documentMongoRepository)
}
