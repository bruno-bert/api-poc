import { DeleteDocumentById } from '@/domain/usecases'
import {  BucketDeleteDocumentById } from '@/data/usecases'
import { makeBucketRepository } from "@/main/factories"
import { DocumentMongoRepository } from '@/infra/db'

export const makeBucketDeleteDocument = (): DeleteDocumentById => {
  const documentMongoRepository = new DocumentMongoRepository() 
  return new BucketDeleteDocumentById(documentMongoRepository,documentMongoRepository, makeBucketRepository())
}
