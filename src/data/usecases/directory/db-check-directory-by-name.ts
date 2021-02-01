import { CheckDirectoryByName } from '@/domain/usecases'
import { CheckDirectoryByNameRepository } from '@/data/protocols'

export class DbCheckDirectoryByName implements CheckDirectoryByName {
  constructor (private readonly checkDocumenByNameRepository: CheckDirectoryByNameRepository) {}

  async checkByName (accountId: string, name: string): Promise<CheckDirectoryByName.Result> {
    return this.checkDocumenByNameRepository.checkByName(accountId, name)
  }
}
