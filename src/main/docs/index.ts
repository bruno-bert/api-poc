import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'App POC',
    description: 'Essa é a documentação da API padrão para uma POC',
    version: '1.0.0',
    contact: {
      name: 'Bruno de Paula',
      email: 'bruno.bert.jj@gmail.com',
      url: 'https://www.github.com/bruno-bert'
    },
    license: {
      name: 'GPL-3.0-or-later',
      url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
    }
  },
  /* externalDocs: {
    description: 'Link para External docs na documentação',
    url: ''
  }, */
  servers: [{
    url: '/api',
    description: 'Servidor Principal'
  }],
  tags: [{
    name: 'Login',
    description: 'APIs related to Authentication'
  }, {
    name: 'Enquete',
    description: 'APIs relacionadas a Enquete'
  },
  {
    name: 'Document Type',
    description: 'APIs related to Document Type'
  }],
  paths,
  schemas,
  components
}
