import { DeleteDocumentById } from '@/domain/usecases'
import { S3Repository } from '@/infra/db'
import { DbDeleteDocumentById } from '@/data/usecases'

export const makeBucketDeleteDocument = (): DeleteDocumentById => {
  const s3Repository = new S3Repository()
  return new DbDeleteDocumentById(s3Repository)
}
