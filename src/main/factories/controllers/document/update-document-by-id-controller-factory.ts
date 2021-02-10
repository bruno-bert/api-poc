import { makeLogControllerDecorator, makeDbUpdateDocumentById } from '@/main/factories'
import { makeUpdateDocumentByIdValidation } from '@/validation/factories'
import { Controller } from '@/presentation/protocols'
import { UpdateDocumentByIdController } from '@/presentation/controllers'

export const makeUpdateDocumentByIdController = (): Controller => {
  const controller = new UpdateDocumentByIdController(makeUpdateDocumentByIdValidation(), makeDbUpdateDocumentById())
  return makeLogControllerDecorator(controller)
}
