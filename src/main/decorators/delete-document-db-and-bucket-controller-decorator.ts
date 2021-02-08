import { Controller, HttpResponse } from '@/presentation/protocols'
import { DeleteDocumentByIdRepository, LoadDocumentByIdRepository } from '@/data/protocols/db'
import { DocumentModel } from '@/domain/models'
import {  controllerError } from '@/presentation/helpers'

export class DeleteDocumentFromDbAndBucketControllerDecorator implements Controller {
  constructor (
    private readonly deleteDocumentController: Controller,
    private readonly loadDocumentByIdRepository: LoadDocumentByIdRepository,
    private readonly deleteDocumentByIdRepository: DeleteDocumentByIdRepository
  ) {}

  async handle (request: DeleteDocumentFromDbAndBucketControllerDecorator.Request): Promise<HttpResponse> {

    try {
      const result: DocumentModel  = await this.loadDocumentByIdRepository.loadById(request.id)

      const httpResponse = await this.deleteDocumentController.handle(request)
  
      if (httpResponse.statusCode === 200 && result?.file) {
        await this.deleteDocumentByIdRepository.deleteById(result.file.key)
      }
      return httpResponse
    } catch(error){
      return controllerError(error)
    }
    
  }
}

export namespace DeleteDocumentFromDbAndBucketControllerDecorator {
  export type Request = {
    id: string
  }

}