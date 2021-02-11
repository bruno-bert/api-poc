require('dotenv').config()
export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/app-poc',
  host: process.env.HOST || 'http://localhost',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'tj67O==5H'
}
