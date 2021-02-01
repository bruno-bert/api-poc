import { LoadDirectory } from '@/domain/usecases'
import { LoadDirectoryRepository } from '@/data/protocols'

export class DbLoadDirectory implements LoadDirectory {
  constructor (private readonly loadDirectoryRepository: LoadDirectoryRepository) {}

  async load (accountId: string): Promise<LoadDirectory.Result> {
    return this.loadDirectoryRepository.loadAll(accountId)
  }
}
