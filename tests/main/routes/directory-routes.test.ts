import app from '@/main/config/app'
import env from '@/main/config/env'
import { MongoHelper } from '@/infra/db'

import { sign } from 'jsonwebtoken'
import { Collection } from 'mongodb'
import request from 'supertest'

let directoryCollection: Collection
let accountCollection: Collection

const testMail = 'tester@test.com'
const testName = 'Tester'
const strongPassword = ' L23343_@abc'

const successRequestObject = {
  name: 'folder test'
}

const mockAccessToken = async (): Promise<string> => {
  const res = await accountCollection.insertOne({
    name: testName,
    email: testMail,
    password: strongPassword
  })
  const id = res.ops[0]._id
  const accessToken = sign({ id }, env.jwtSecret)
  await accountCollection.updateOne({
    _id: id
  }, {
    $set: {
      accessToken
    }
  })
  return accessToken
}

describe('Directory Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    directoryCollection = await MongoHelper.getCollection('directories')
    await directoryCollection.deleteMany({})
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /directory', () => {
    test('Should return 403 on add directory without accessToken', async () => {
      await request(app)
        .post('/api/directory')
        .send({
          name: 'test'
        })
        .expect(403)
    })

    test('Should return 200 on add directory with valid accessToken', async () => {
      const accessToken = await mockAccessToken()
      await request(app)
        .post('/api/directory')
        .set('x-access-token', accessToken)
        .send(successRequestObject)
        .expect(200)
    })
  })

  describe('GET /directory', () => {
    test('Should return 403 on load directories without accessToken', async () => {
      await request(app)
        .get('/api/directory')
        .expect(403)
    })

    test('Should return 200 on load directories with valid accessToken', async () => {
      const accessToken = await mockAccessToken()

      await request(app)
        .post('/api/directory')
        .set('x-access-token', accessToken)
        .send(successRequestObject)
        .expect(200)

      await request(app)
        .get('/api/directory')
        .set('x-access-token', accessToken)
        .expect(200)
    })
  })
})
