import { CheckDocumentByName } from '@/domain/usecases'
import { CheckDocumentByNameRepository } from '@/data/protocols'

export class DbCheckDocumentByName implements CheckDocumentByName {
  constructor (private readonly checkDocumenByNameRepository: CheckDocumentByNameRepository) {}

  async checkByName (accountId: string, name: string): Promise<CheckDocumentByName.Result> {
    return this.checkDocumenByNameRepository.checkByName(accountId, name)
  }
}
