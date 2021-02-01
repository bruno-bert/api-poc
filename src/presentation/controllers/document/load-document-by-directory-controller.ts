import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { noContent, controllerError, ok, badRequest } from '@/presentation/helpers'
import { LoadDocumentByDirectory } from '@/domain/usecases'
import { DirectoryModel } from '@/domain/models'

export class LoadDocumentByDirectoryController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly loadDocumentByDiretory: LoadDocumentByDirectory) {}

  async handle (request: LoadDocumentByDirectoryController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const documents = await this.loadDocumentByDiretory.load(request.accountId, request.directory)
      return documents.length ? ok(documents) : noContent()
    } catch (error) {
      return controllerError(error)
    }
  }
}

export namespace LoadDocumentByDirectoryController {
  export type Request = {
    accountId: string
    directory: DirectoryModel
  }
}
