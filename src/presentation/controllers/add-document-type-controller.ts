import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, serverError, ok } from '@/presentation/helpers'
import { AddDocumentType } from '@/domain/usecases'

export class AddDocumentTypeController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addDocumentType: AddDocumentType
  ) {}

  async handle (request: AddDocumentTypeController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const documentType = await this.addDocumentType.add({
        ...request,
        date: new Date()
      })

      return ok(documentType)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddDocumentTypeController {
  export type Request = {
    description: string
  }

}
