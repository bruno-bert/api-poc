import { makeLogControllerDecorator, makeDbAddDocumentType } from '@/main/factories'
import { makeAddDocumentTypeValidation } from '@/validation/factories/document-type'
import { Controller } from '@/presentation/protocols'
import { AddDocumentTypeController } from '@/presentation/controllers'

export const makeAddDocumentTypeController = (): Controller => {
  const controller = new AddDocumentTypeController(makeAddDocumentTypeValidation(), makeDbAddDocumentType())
  return makeLogControllerDecorator(controller)
}
