import fs from 'fs'
import path from 'path'

import {
  DeleteDocumentByIdRepository
} from '@/data/protocols/db'
import { bucketConfig as config } from './bucket-config'
import { LocalBucketError } from "@/infra/errors"


export class LocalBucketRepository implements
DeleteDocumentByIdRepository {
  async deleteById (id: string): Promise<DeleteDocumentByIdRepository.Result> {
  
    return new Promise((resolve, reject)=>{
      const fileToDelete = path.join(config.pathToSave,id)
      fs.unlink(fileToDelete,  (err) => {
        if (err) {
          console.log('fileToDelete', fileToDelete)
          console.log(err) 
          reject(new LocalBucketError(err.errno, err.message))
        } else {         
          resolve(true) 
        }
      })
    }) 

    
  }
}
