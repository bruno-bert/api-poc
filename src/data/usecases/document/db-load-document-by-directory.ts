import { LoadDocumentByDirectory } from '@/domain/usecases'
import { LoadDocumentByDirectoryRepository } from '@/data/protocols'

export class DbLoadDocumentByDirectory implements LoadDocumentByDirectory {
  constructor (private readonly loadDocumentByDirectoryRepository: LoadDocumentByDirectoryRepository) {}

  async load (accountId: string, directory: string): Promise<LoadDocumentByDirectory.Result> {
    return this.loadDocumentByDirectoryRepository.loadByDirectory(accountId, directory)
  }
}
