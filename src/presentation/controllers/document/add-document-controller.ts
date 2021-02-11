import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, controllerError, ok } from '@/presentation/helpers'
import { AddDocument } from '@/domain/usecases'
import { mapAddRequestToModel, mapModelToView } from '@/presentation/view-models/document'

export class AddDocumentController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addDocument: AddDocument
  ) {}

  async handle (request: AddDocumentController.Request): Promise<HttpResponse> {
    try {
      const model = mapAddRequestToModel(request)
      const error = this.validation.validate(model)
      if (error) {
        return badRequest(error)
      }

      const Document = await this.addDocument.add(model)
      return ok(mapModelToView(Document))
    } catch (error) {
      return controllerError(error)
    }
  }
}

export namespace AddDocumentController {
  export type Request = {
    accountId: string
    name: string
    directory: string
    file: File
    documentType: string
  }

  export type File = {
    originalname: string
    size: string
    key: string
    mimetype: string
    location: string
  }

}
