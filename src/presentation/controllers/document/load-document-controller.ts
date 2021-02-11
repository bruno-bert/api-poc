import { Controller, HttpResponse } from '@/presentation/protocols'
import { noContent, controllerError, ok } from '@/presentation/helpers'
import { LoadDocument } from '@/domain/usecases'
import { mapModelToViewCollection } from '@/presentation/view-models/document'

export class LoadDocumentController implements Controller {
  constructor (
    private readonly loadDocument: LoadDocument) {}

  async handle (request: LoadDocumentController.Request): Promise<HttpResponse> {
    try {
      const documents = await this.loadDocument.load(request.accountId)
      return documents.length ? ok(mapModelToViewCollection(documents)) : noContent()
    } catch (error) {
      return controllerError(error)
    }
  }
}

export namespace LoadDocumentController {
  export type Request = {
    accountId: string
  }
}
