import { CheckDocumentByDirectory } from '@/domain/usecases'
import { CheckDocumentByDirectoryRepository } from '@/data/protocols'

export class DbCheckDocumentByDirectory implements CheckDocumentByDirectory {
  constructor (private readonly checkDocumentByDirectoryRepository: CheckDocumentByDirectoryRepository) {}

  async checkByDirectory (accountId: string, directory: string): Promise<CheckDocumentByDirectory.Result> {
    return this.checkDocumentByDirectoryRepository.checkByDirectory(accountId, directory)
  }
}
