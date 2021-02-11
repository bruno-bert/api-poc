import 'module-alias/register'
import env from '@/main/config/env'
import { MongoHelper } from '@/infra/db'

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(env.port, () => console.log(`Server running at ${env.host}:${env.port}`))
  })
  .catch(console.error)
