import { adaptRoute } from '@/main/adapters'
import { makeAddDirectoryController, makeLoadDirectoryController } from '@/main/factories'
import { auth } from '@/main/middlewares'
import { Router } from 'express'

export default (router: Router): void => {
  router.post('/directory',auth, adaptRoute(makeAddDirectoryController()))
  router.get('/directory',auth, adaptRoute(makeLoadDirectoryController()))
}
