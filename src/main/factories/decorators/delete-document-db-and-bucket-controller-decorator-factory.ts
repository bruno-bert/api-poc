import {  DeleteDocumentFromDbAndBucketControllerDecorator } from '@/main/decorators'
import { DocumentMongoRepository } from '@/infra/db'
import { Controller } from '@/presentation/protocols'
import { makeBucketRepository } from "@/main/factories"

export const makeDeleteDocumentDbAndBucketControllerDecorator = (controller: Controller): Controller => {
  const loadDocumentByIdRepository = new DocumentMongoRepository()
  return new DeleteDocumentFromDbAndBucketControllerDecorator(controller,loadDocumentByIdRepository, makeBucketRepository())
}
