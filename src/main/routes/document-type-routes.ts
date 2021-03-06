import { adaptRoute } from '@/main/adapters'
import { makeAddDocumentTypeController, makeLoadDocumentTypeController } from '@/main/factories'
import { auth, adminAuth } from '@/main/middlewares'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/document-type',adminAuth, adaptRoute(makeAddDocumentTypeController()))
  router.get('/document-type',auth, adaptRoute(makeLoadDocumentTypeController()))
}
