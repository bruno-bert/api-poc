import {  DeleteDocumentFromDbAndBucketControllerDecorator } from '@/main/decorators'
import { S3Repository, DocumentMongoRepository } from '@/infra/db'
import { Controller } from '@/presentation/protocols'

export const makeDeleteDocumentDbAndBucketControllerDecorator = (controller: Controller): Controller => {
  const s3Repository = new S3Repository()
  const loadDocumentByIdRepository = new DocumentMongoRepository()
  return new DeleteDocumentFromDbAndBucketControllerDecorator(controller,loadDocumentByIdRepository, s3Repository)
}
