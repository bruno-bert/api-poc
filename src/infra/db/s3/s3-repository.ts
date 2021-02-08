import aws from 'aws-sdk'
import {
  DeleteDocumentByIdRepository
} from '@/data/protocols/db'
import { s3Config as config } from '../../config/s3-config'
import { S3Error } from '@/infra/errors'

export class S3Repository implements
DeleteDocumentByIdRepository {
  async deleteById (id: string): Promise<DeleteDocumentByIdRepository.Result> {
   
    const s3 = new aws.S3({
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey
    })

    const params = {
      Bucket: config.bucketName,
      Key: id
    }
    return new Promise((resolve, reject)=>{
      s3.deleteObject(params, function (err, data) {
        if (err) {
          console.log(err, err.stack) 
          reject(new S3Error(err.stack))
        } else {         
          resolve(true) 
        }
      })
    }) 

    
  }
}
