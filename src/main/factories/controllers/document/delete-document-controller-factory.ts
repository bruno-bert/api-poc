import { makeLogControllerDecorator, makeDbDeleteDocument } from '@/main/factories'
import { makeDeleteDocumentValidation } from '@/validation/factories/document'
import { Controller } from '@/presentation/protocols'
import { DeleteDocumentController } from '@/presentation/controllers'

export const makeDeleteDocumentController = (): Controller => {
  const controller = new DeleteDocumentController(makeDeleteDocumentValidation(), makeDbDeleteDocument())
  return makeLogControllerDecorator(controller)
}
