import { AddDirectory } from '@/domain/usecases'
import { AddDirectoryRepository, CheckDirectoryByNameRepository } from '@/data/protocols'
import { DirectoryExistsError } from '@/domain/errors'

export class DbAddDirectory implements AddDirectory {
  constructor (private readonly addDirectoryRepository: AddDirectoryRepository,
    private readonly checkDirectoryByNameRepository: CheckDirectoryByNameRepository) {}

  async add (data: AddDirectory.Params): Promise<AddDirectory.Result> {
    const exists = await this.checkDirectoryByNameRepository.checkByName(data.accountId, data.name)
    if (!exists) {
      return await this.addDirectoryRepository.add(data)
    } else {
      throw new DirectoryExistsError()
    }
  }
}
