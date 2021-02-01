import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, controllerError, ok } from '@/presentation/helpers'
import { AddDirectory } from '@/domain/usecases'

export class AddDirectoryController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addDirectory: AddDirectory
  ) {}

  async handle (request: AddDirectoryController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const directory = await this.addDirectory.add({
        ...request,
        date: new Date()
      })

      return ok(directory)
    } catch (error) {
      return controllerError(error)
    }
  }
}

export namespace AddDirectoryController {
  export type Request = {
    accountId: string
    name: string
  }

}
