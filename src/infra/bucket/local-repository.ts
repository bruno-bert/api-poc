import fs from 'fs'
import path from 'path'

import {
  BucketDeleteDocumentByIdAdapter
} from '@/data/protocols/bucket'
import { bucketConfig as config } from './bucket-config'
import { LocalBucketError } from '@/infra/errors'

export class LocalBucketRepository implements
BucketDeleteDocumentByIdAdapter {
  async deleteById (id: string): Promise<BucketDeleteDocumentByIdAdapter.Result> {
    return new Promise((resolve, reject) => {
      const fileToDelete = path.join(config.pathToSave,id)
      fs.unlink(fileToDelete, (err) => {
        if (err) {
          reject(new LocalBucketError(err.errno, err.message))
        } else {
          resolve(true)
        }
      })
    })
  }
}
