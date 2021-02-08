import { Controller, HttpResponse, Validation } from '@/presentation/protocols'
import { badRequest, controllerError, ok } from '@/presentation/helpers'
import { AddDocument } from '@/domain/usecases'
import { FileModel } from "@/domain/models"
 
export class AddDocumentController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addDocument: AddDocument
  ) {}
  
  setDocumentUrl(file: AddDocumentController.File): string {
    console.log(file)
    return process.env.STORAGE_TYPE === 'local' ? `${process.env.APP_URL}/static/uploads/${file.key}` : file.location  
  }

  mapFileModel(file: AddDocumentController.File): FileModel {
    return {
      originalname: file.originalname,
      size: file.size,
      key: file.key,
      url: this.setDocumentUrl(file),
      type: file.mimetype
    }
  }
  mapAddDocumentModel (request: AddDocumentController.Request): any {
    return {
      name: request.file.originalname,
      documentType: { description: request.documentType },
      directory: { name: request.directory || 'root' },
      file: this.mapFileModel(request.file),
      accountId: request.accountId
    }
  }

  async handle (request: AddDocumentController.Request): Promise<HttpResponse> {
    try {
      const model = this.mapAddDocumentModel(request)
      const error = this.validation.validate(model)
      if (error) {
        return badRequest(error)
      }

      const Document = await this.addDocument.add({
        ...model,
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
