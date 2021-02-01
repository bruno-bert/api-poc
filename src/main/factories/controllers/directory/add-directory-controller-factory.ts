import { makeLogControllerDecorator, makeDbAddDirectory } from '@/main/factories'
import { makeAddDirectoryValidation } from '@/validation/factories/directory'
import { Controller } from '@/presentation/protocols'
import { AddDirectoryController } from '@/presentation/controllers'

export const makeAddDirectoryController = (): Controller => {
  const controller = new AddDirectoryController(makeAddDirectoryValidation(), makeDbAddDirectory())
  return makeLogControllerDecorator(controller)
}
