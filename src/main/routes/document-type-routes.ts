import { adaptRoute } from '@/main/adapters'
import { makeAddDocumentTypeController, makeLoadDocumentTypeController } from '@/main/factories'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/document-type', adaptRoute(makeAddDocumentTypeController()))
  router.get('/document-type', adaptRoute(makeLoadDocumentTypeController()))
}
