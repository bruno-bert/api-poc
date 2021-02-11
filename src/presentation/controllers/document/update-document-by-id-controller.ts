import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, controllerError, ok } from '@/presentation/helpers'
import { UpdateDocumentById } from '@/domain/usecases'
import { mapUpdateRequestToModel, mapModelToView } from '@/presentation/view-models/document'

export class UpdateDocumentByIdController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly updateDocumentById: UpdateDocumentById
  ) {}

  async handle (request: UpdateDocumentByIdController.Request): Promise<HttpResponse> {
    try {
      const model = mapUpdateRequestToModel(request)
      const error = this.validation.validate(model)
      if (error) {
        return badRequest(error)
      }

      const Document = await this.updateDocumentById.updateById(request.id, model)

      return ok(mapModelToView(Document))
    } catch (error) {
      return controllerError(error)
    }
  }
}

export namespace UpdateDocumentByIdController {
  export type Request = {
    id: string
    accountId: string
    name: string
    directory: string
    file: FileRequest
    documentType: string
  }

  export type FileRequest = {
    originalname: string
    size: string
    key: string
    mimetype: string
    location: string
  }

}
