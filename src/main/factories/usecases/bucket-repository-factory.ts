import { LocalBucketRepository, S3Repository } from '@/infra/bucket'

export const makeBucketRepository = () => {
  return process.env.STORAGE_TYPE === 's3' ? new S3Repository() : new LocalBucketRepository()
}


