import { adaptRoute } from '@/main/adapters'

import {
  makeAddDocumentController,
  makeDeleteDocumentController,
  makeDeleteDocumentFromBucketController,
  makeLoadDocumentController,
  makeLoadDocumentByDirectoryController,
  makeUpdateDocumentByIdController
} from '@/main/factories'

import { auth } from '@/main/middlewares'
import { Router } from 'express'
import multerConfig from '@/infra/http/multer-config'
import multer from 'multer'

export default (router: Router): void => {
  router.post('/document', auth, multer(multerConfig).single('file'), adaptRoute(makeAddDocumentController()))
  router.delete('/document/:id', auth, adaptRoute(makeDeleteDocumentController()))
  router.put('/document/:id', auth, adaptRoute(makeUpdateDocumentByIdController()))
  router.delete('/document/bucket/:id', auth, adaptRoute(makeDeleteDocumentFromBucketController()))
  router.get('/document', auth, adaptRoute(makeLoadDocumentController()))
  router.get('/document-by-directory',auth, adaptRoute(makeLoadDocumentByDirectoryController()))
}
