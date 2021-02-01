import { LoadDocumentByDirectory } from '@/domain/usecases'
import { LoadDocumentByDirectoryRepository } from '@/data/protocols'
import { DirectoryModel } from '@/domain/models'

export class DbLoadDocumentByDirectory implements LoadDocumentByDirectory {
  constructor (private readonly loadDocumentByDirectoryRepository: LoadDocumentByDirectoryRepository) {}

  async load (accountId: string, directory: DirectoryModel): Promise<LoadDocumentByDirectory.Result> {
    return this.loadDocumentByDirectoryRepository.loadByDirectory(accountId, directory)
  }
}
