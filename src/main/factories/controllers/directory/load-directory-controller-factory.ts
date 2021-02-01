import { makeLogControllerDecorator, makeDbLoadDirectory } from '@/main/factories'
import { Controller } from '@/presentation/protocols'
import { LoadDirectoryController } from '@/presentation/controllers'

export const makeLoadDirectoryController = (): Controller => {
  const controller = new LoadDirectoryController(makeDbLoadDirectory())
  return makeLogControllerDecorator(controller)
}
