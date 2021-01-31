import { makeLogControllerDecorator, makeDbLoadDocumentType } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { LoadDocumentTypeController } from '@/presentation/controllers'

export const makeLoadDocumentTypeController = (): Controller => {
  const controller = new LoadDocumentTypeController(makeDbLoadDocumentType())
  return makeLogControllerDecorator(controller)
}
