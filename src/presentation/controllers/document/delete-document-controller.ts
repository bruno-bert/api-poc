import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, controllerError, noContent, ok } from '@/presentation/helpers'
import { DeleteDocumentById } from '@/domain/usecases'

export class DeleteDocumentController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly deleteDocumentById: DeleteDocumentById
  ) {}

  async handle (request: DeleteDocumentController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }

      const result = await this.deleteDocumentById.deleteById(request.id)

      return result ? ok(result) : noContent()
    } catch (error) {
      return controllerError(error)
    }
  }
}

export namespace DeleteDocumentController {
  export type Request = {
    id: string
  }

}
