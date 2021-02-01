import app from '@/main/config/app'
import env from '@/main/config/env'
import { MongoHelper } from '@/infra/db'

import { sign } from 'jsonwebtoken'
import { Collection } from 'mongodb'
import request from 'supertest'

let documentCollection: Collection
let accountCollection: Collection

const testMail = 'tester@test.com'
const testName = 'Tester'
const strongPassword = ' L23343_@abc'

const successRequestObject = {
  name: 'boleto mes março',
  directory: { name: 'test directory' },
  path: 'test path',
  documentType: {
    description: 'boleto'
  }
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

describe('Document Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    documentCollection = await MongoHelper.getCollection('Documents')
    await documentCollection.deleteMany({})
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /document', () => {
    test('Should return 403 on add document without accessToken', async () => {
      await request(app)
        .post('/api/document')
        .send({
          name: 'test'
        })
        .expect(403)
    })

    test('Should return 200 on add document with valid accessToken', async () => {
      const accessToken = await mockAccessToken()
      await request(app)
        .post('/api/document')
        .set('x-access-token', accessToken)
        .send(successRequestObject)
        .expect(200)
    })
  })

  describe('GET /document', () => {
    test('Should return 403 on load documents without accessToken', async () => {
      await request(app)
        .get('/api/document')
        .expect(403)
    })

    test('Should return 200 on load document with valid accessToken', async () => {
      const accessToken = await mockAccessToken()

      await request(app)
        .post('/api/document')
        .set('x-access-token', accessToken)
        .send(successRequestObject)
        .expect(200)

      await request(app)
        .get('/api/document')
        .set('x-access-token', accessToken)
        .expect(200)
    })

    test('Should return 403 on load document by directory without valid accessToken', async () => {
      await request(app)
        .get('/api/document-by-directory')
        .expect(403)
    })

    test('Should return 400 on load document by directory without directory', async () => {
      const accessToken = await mockAccessToken()
      await request(app)
        .get('/api/document-by-directory')
        .set('x-access-token', accessToken)
        .expect(400)
    })

    test('Should return 200 on load document by directory with valid accessToken and valid object', async () => {
      const accessToken = await mockAccessToken()

      await request(app)
        .post('/api/document')
        .set('x-access-token', accessToken)
        .send(successRequestObject)
        .expect(200)

      await request(app)
        .get('/api/document-by-directory')
        .send({ directory: successRequestObject.directory })
        .set('x-access-token', accessToken)
        .expect(200)

      await request(app)
        .get('/api/document-by-directory')
        .send({ directory: { name: 'other_directory' } })
        .set('x-access-token', accessToken)
        .expect(204)
    })
  })
})
