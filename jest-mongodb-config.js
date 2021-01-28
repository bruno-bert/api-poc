module.exports = {
  mongodbMemoryServer: {
    version: '4.4.1'
  },
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'jest'
    },
    binary: {
      version: '3.6.21',
      skipMD5: true
    },
    autoStart: false
  }
}
