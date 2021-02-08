import crypto from 'crypto'
import aws from 'aws-sdk'
import multerS3 from 'multer-s3'
import multer from 'multer'
import { s3Config as config } from '../config/s3-config'

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, config.pathToSave)
    },
    filename: (req, file: any, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err, null)

        file.key = `${hash.toString('hex')}-${file.originalname}`

        cb(null, file.key)
      })
    }
  }),
  s3: multerS3({
    s3: new aws.S3({
      accessKeyId: config.accessKeyId,
      secretAccessKey: config.secretAccessKey
    }),
    bucket: config.bucketName,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err)

        const fileName = `${hash.toString('hex')}-${file.originalname}`

        cb(null, fileName)
      })
    }
  })
}

export default {
  dest: config.pathToSave,
  storage: storageTypes[config.storageType],
  limits: {
    fileSize: config.maxSize
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Invalid file type.'))
    }
  }
}
