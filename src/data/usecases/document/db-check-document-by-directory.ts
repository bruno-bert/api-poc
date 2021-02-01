import { CheckDocumentByDirectory } from '@/domain/usecases'
import { CheckDocumentByDirectoryRepository } from '@/data/protocols'
import { DirectoryModel } from '@/domain/models'

export class DbCheckDocumentByDirectory implements CheckDocumentByDirectory {
  constructor (private readonly checkDocumentByDirectoryRepository: CheckDocumentByDirectoryRepository) {}

  async checkByDirectory (accountId: string, directory: DirectoryModel): Promise<CheckDocumentByDirectory.Result> {
    return this.checkDocumentByDirectoryRepository.checkByDirectory(accountId, directory)
  }
}
