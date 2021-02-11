import aws from 'aws-sdk'
import {
  BucketDeleteDocumentByIdAdapter
} from '@/data/protocols/bucket'
import { bucketConfig as config } from './bucket-config'
import { S3Error } from '@/infra/errors'

export class S3Repository implements
BucketDeleteDocumentByIdAdapter {
  async deleteById (id: string): Promise<BucketDeleteDocumentByIdAdapter.Result> {
    const s3 = new aws.S3({
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey
    })

    const params = {
      Bucket: config.bucketName,
      Key: id
    }
    return new Promise((resolve, reject) => {
      s3.deleteObject(params, function (err, data) {
        if (err) {
          reject(new S3Error(err.stack))
        } else {
          resolve(true)
        }
      })
    })
  }
}
