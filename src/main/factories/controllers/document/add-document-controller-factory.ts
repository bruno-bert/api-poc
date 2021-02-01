import { makeLogControllerDecorator, makeDbAddDocument } from '@/main/factories'
import { makeAddDocumentValidation } from '@/validation/factories/document'
import { Controller } from '@/presentation/protocols'
import { AddDocumentController } from '@/presentation/controllers'

export const makeAddDocumentController = (): Controller => {
  const controller = new AddDocumentController(makeAddDocumentValidation(), makeDbAddDocument())
  return makeLogControllerDecorator(controller)
}
