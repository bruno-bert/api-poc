import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, controllerError, ok } from '@/presentation/helpers'
import { UpdateDocumentById } from '@/domain/usecases'
import { FileModel } from "@/domain/models"
import { setDocumentUrl } from "../../utils" 

export class UpdateDocumentByIdController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly updateDocumentById: UpdateDocumentById
  ) {}
  


  mapFileModel(file: UpdateDocumentByIdController.File): FileModel {
    return {
      originalname: file.originalname,
      size: file.size,
      key: file.key,
      url: setDocumentUrl(file),
      type: file.mimetype
    }
  }
  mapDocumentModel (request: UpdateDocumentByIdController.Request): any {
    return {
      name: request.file.originalname,
      documentType: { description: request.documentType },
      directory: { name: request.directory || 'root' },
      file: this.mapFileModel(request.file),
      accountId: request.accountId
    }
  }

  async handle (request: UpdateDocumentByIdController.Request): Promise<HttpResponse> {
    try {
      const model = this.mapDocumentModel(request)
      const error = this.validation.validate(model)
      if (error) {
        return badRequest(error)
      }

      const Document = await this.updateDocumentById.updateById(request.id, {
        ...model,
        date: new Date()
      })

      return ok(Document)
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
