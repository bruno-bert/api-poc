import { Controller, HttpResponse } from '@/presentation/protocols'
import { noContent, controllerError, ok } from '@/presentation/helpers'
import { LoadDirectory } from '@/domain/usecases'

export class LoadDirectoryController implements Controller {
  constructor (
    private readonly loadDirectory: LoadDirectory) {}

  async handle (request: LoadDirectoryController.Request): Promise<HttpResponse> {
    try {
      const directories = await this.loadDirectory.load(request.accountId)
      return directories.length ? ok(directories) : noContent()
    } catch (error) {
      return controllerError(error)
    }
  }
}

export namespace LoadDirectoryController {
  export type Request = {
    accountId: string
  }
}
