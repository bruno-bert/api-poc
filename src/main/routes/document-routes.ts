import { adaptRoute } from '@/main/adapters'
import { makeAddDocumentController, makeLoadDocumentController, makeLoadDocumentByDirectoryController } from '@/main/factories'
import { auth } from '@/main/middlewares'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/document',auth, adaptRoute(makeAddDocumentController()))
  router.get('/document',auth, adaptRoute(makeLoadDocumentController()))
  router.get('/document-by-directory',auth, adaptRoute(makeLoadDocumentByDirectoryController()))
}
