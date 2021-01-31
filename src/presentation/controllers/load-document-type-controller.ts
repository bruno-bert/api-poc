import { Controller, HttpResponse } from '@/presentation/protocols'
import { noContent, controllerError, ok } from '@/presentation/helpers'
import { LoadDocumentType } from '@/domain/usecases'

export class LoadDocumentTypeController implements Controller {
  constructor (private readonly loadDocumentType: LoadDocumentType) {}

  async handle (request: LoadDocumentTypeController.Request): Promise<HttpResponse> {
    try {
      const documentTypes = await this.loadDocumentType.load()
      return documentTypes.length ? ok(documentTypes) : noContent()
    } catch (error) {
      return controllerError(error)
    }
  }
}

export namespace LoadDocumentTypeController {
  export type Request = {}
}
