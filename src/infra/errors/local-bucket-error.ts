import { RequestError } from "@/domain/errors"

export class LocalBucketError extends RequestError {
  constructor (errno: number, message: string) {
    
    if (errno === -4058)
      message= 'File does not exist in the repository'

    super(`Local Bucket Error - message: ${message}`)
    this.name = 'LocalBucketError'
  }
}
