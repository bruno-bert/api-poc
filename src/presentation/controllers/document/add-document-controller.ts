import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, controllerError, ok } from '@/presentation/helpers'
import { AddDocument } from '@/domain/usecases'
import { DirectoryModel, DocumentTypeModel } from '@/domain/models'

export class AddDocumentController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addDocument: AddDocument
  ) {}

  async handle (request: AddDocumentController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const Document = await this.addDocument.add({
        ...request,
        date: new Date()
      })

      return ok(Document)
    } catch (error) {
      return controllerError(error)
    }
  }
}

export namespace AddDocumentController {
  export type Request = {
    accountId: string
    name: string
    directory: DirectoryModel
    path: string
    documentType: DocumentTypeModel
  }

}
