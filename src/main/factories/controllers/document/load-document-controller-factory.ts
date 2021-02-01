import { makeLogControllerDecorator, makeDbLoadDocument } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { LoadDocumentController } from '@/presentation/controllers'

export const makeLoadDocumentController = (): Controller => {
  const controller = new LoadDocumentController(makeDbLoadDocument())
  return makeLogControllerDecorator(controller)
}
