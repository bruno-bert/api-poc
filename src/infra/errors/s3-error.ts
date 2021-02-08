export class S3Error extends Error {
  constructor (message: string) {
    super(`S3 Error - message: ${message}`)
    this.name = 'S3Error'
  }
}
