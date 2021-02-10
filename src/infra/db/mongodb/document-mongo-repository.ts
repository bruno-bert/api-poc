import { MongoHelper, QueryBuilder } from '@/infra/db'
import {
  AddDocumentRepository,
  LoadDocumentRepository,
  LoadDocumentByIdRepository,
  CheckDocumentByIdRepository,
  LoadDocumentByDirectoryRepository,
  CheckDocumentByNameRepository,
  CheckDocumentByDirectoryRepository,
  DeleteDocumentByIdRepository,
  UpdateDocumentByIdRepository
} from '@/data/protocols/db'
import { MongoDbError } from '@/infra/errors'
import { DirectoryEntity } from '@/data/entities'

import { ObjectId } from 'mongodb'

export class DocumentMongoRepository implements
AddDocumentRepository,
LoadDocumentRepository,
LoadDocumentByIdRepository, CheckDocumentByIdRepository,
LoadDocumentByDirectoryRepository,
CheckDocumentByDirectoryRepository,
DeleteDocumentByIdRepository,
UpdateDocumentByIdRepository {
  async add (data: AddDocumentRepository.Params): Promise<AddDocumentRepository.Result> {
    const DocumenTypeCollection = await MongoHelper.getCollection('Documents')
    const Document = await DocumenTypeCollection.insertOne(data)
    if (Document) {
      return MongoHelper.map(Document.ops[0])
    } else {
      throw new MongoDbError('add', 'Document returned null')
    }
  }

  async loadAll (accountId: string): Promise<LoadDocumentRepository.Result> {
    const DocumentCollection = await MongoHelper.getCollection('Documents')
    const query = new QueryBuilder()
      .match({
        accountId
      })
      .lookup({
        from: 'DocumentResults',
        foreignField: 'DocumentId',
        localField: '_id',
        as: 'result'
      })
     /*  .project({
        _id: 1,
        name: 1,
        directory: 1,
        path: 1,
        date: 1
      }) */
      .build()
    const Documents = await DocumentCollection.aggregate(query).toArray()
    return MongoHelper.mapCollection(Documents)
  }

  async loadById (id: string): Promise<LoadDocumentByIdRepository.Result> {
    const DocumentCollection = await MongoHelper.getCollection('Documents')
    const Document = await DocumentCollection.findOne({ _id: new ObjectId(id) })
    return Document && MongoHelper.map(Document)
  }

  async checkById (id: string): Promise<CheckDocumentByIdRepository.Result> {
    const DocumentCollection = await MongoHelper.getCollection('Documents')
    const Document = await DocumentCollection.findOne({
      _id: new ObjectId(id)
    }, {
      projection: {
        _id: 1
      }
    })
    return Document !== null
  }

  async updateById (id: string, data: UpdateDocumentByIdRepository.Params): Promise<UpdateDocumentByIdRepository.Result> {
    const DocumenTypeCollection = await MongoHelper.getCollection('Documents')
    
    const query = {
      _id: new ObjectId(id)
    }
    console.log('id', id)

    const update =  { $set: {
      name: data.name, 
      documentType: data.documentType, 
      directory: data.directory,
      file: data.file,
      date: data.date,
      accountId: data.accountId
     }
    }

    const Document = await DocumenTypeCollection.findOneAndUpdate( query , update  )
    if (Document.value) {
      return MongoHelper.map(Document.value)
    } else {
      throw new MongoDbError('update', 'Document returned null')
    }
  }





  async deleteById (id: string): Promise<DeleteDocumentByIdRepository.Result> {
    const DocumentCollection = await MongoHelper.getCollection('Documents')
    const result = await DocumentCollection.deleteOne({
      _id: new ObjectId(id)
    })
    return result.deletedCount === 1
  }


  async checkByName (accountId: string, name: string): Promise<CheckDocumentByNameRepository.Result> {
    const DocumentCollection = await MongoHelper.getCollection('Documents')
    const Document = await DocumentCollection.findOne({
      accountId,
      name
    }, {
      projection: {
        _id: 1
      }
    })
    return Document !== null
  }

  async checkByDirectory (accountId: string, directory: DirectoryEntity): Promise<CheckDocumentByDirectoryRepository.Result> {
    const DocumentCollection = await MongoHelper.getCollection('Documents')
    const Document = await DocumentCollection.findOne({
      accountId,
      directory
    }, {
      projection: {
        _id: 1
      }
    })
    return Document !== null
  }

  async loadByDirectory (accountId: string, directory: DirectoryEntity):
  Promise<LoadDocumentByDirectoryRepository.Result> {
    const DocumentCollection = await MongoHelper.getCollection('Documents')
    const query = new QueryBuilder()
      .match({
        accountId,
        directory
      })
      .lookup({
        from: 'DocumentResults',
        foreignField: 'DocumentId',
        localField: '_id',
        as: 'result'
      })
    /*   .project({
        _id: 1,
        name: 1,
        directory: 1,
        path: 1,
        date: 1
      }) */
      .build()
    const Documents = await DocumentCollection.aggregate(query).toArray()
    return MongoHelper.mapCollection(Documents)
  }
}
