import { DeleteDocumentById } from '@/domain/usecases'
import { DbDeleteDocumentById } from '@/data/usecases'
import { makeBucketRepository } from "@/main/factories"

export const makeBucketDeleteDocument = (): DeleteDocumentById => {
  return new DbDeleteDocumentById(makeBucketRepository())
}
