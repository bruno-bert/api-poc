import { makeLogControllerDecorator, makeDbLoadDocumentByDirectory } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { makeLoadDocumentByDirectoryValidation } from '@/validation/factories'
import { LoadDocumentByDirectoryController } from '@/presentation/controllers'

export const makeLoadDocumentByDirectoryController = (): Controller => {
  const controller = new LoadDocumentByDirectoryController(
    makeLoadDocumentByDirectoryValidation(),
    makeDbLoadDocumentByDirectory())
  return makeLogControllerDecorator(controller)
}
