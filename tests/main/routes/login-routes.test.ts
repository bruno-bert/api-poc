import app from '@/main/config/app'
import { MongoHelper } from '@/infra/db'

import { Collection } from 'mongodb'
import { hash } from 'bcrypt'
import request from 'supertest'

let accountCollection: Collection
const testName = 'Bruno'
const testMail = 'bruno.bert.jj@gmail.com'
const weakPassword = '12345'
const strongPassword = ' L23343_@abc'

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 400 on signup with weak password', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: testName,
          email: testMail,
          password: weakPassword,
          passwordConfirmation: weakPassword
        })
        .expect(400)
    })

    test('Should return 200 on signup with strong password', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: testName,
          email: testMail,
          password: strongPassword,
          passwordConfirmation: strongPassword
        })
        .expect(200)
      await request(app)
        .post('/api/signup')
        .send({
          name: testName,
          email: testMail,
          password: strongPassword,
          passwordConfirmation: strongPassword
        })
        .expect(403)
    })
  })

  describe('POST /login', () => {
    test('Should return 200 on login', async () => {
      const password = await hash(strongPassword, 12)
      await accountCollection.insertOne({
        name: testName,
        email: testMail,
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: testMail,
          password: strongPassword
        })
        .expect(200)
    })

    test('Should return 401 on login', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: testMail,
          password: strongPassword
        })
        .expect(401)
    })
  })
})
