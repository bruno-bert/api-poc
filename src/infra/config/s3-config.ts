import path from 'path'
export const s3Config = {
  bucketName: process.env.AWS_BUCKET ,
  storageType: process.env.STORAGE_TYPE || 'local',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  maxSize: 2 * 1024 * 1024,
  pathToSave: path.resolve(__dirname, '..', '..','..', 'dist', 'static/uploads')
}
