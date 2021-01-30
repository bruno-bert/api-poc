import { MongoHelper, QueryBuilder } from '@/infra/db'
import {
  AddDocumentTypeRepository,
  LoadDocumentTypeRepository,
  LoadDocumentTypeByIdRepository,
  CheckDocumentTypeByIdRepository
} from '@/data/protocols/db'
import { MongoDbError } from '@/infra/errors'

import { ObjectId } from 'mongodb'

export class DocumentTypeMongoRepository implements AddDocumentTypeRepository, LoadDocumentTypeRepository, LoadDocumentTypeByIdRepository, CheckDocumentTypeByIdRepository {
  async add (data: AddDocumentTypeRepository.Params): Promise<AddDocumentTypeRepository.Result> {
    const DocumenTypeCollection = await MongoHelper.getCollection('DocumentTypes')
    const DocumentType = await DocumenTypeCollection.insertOne(data)
    if (DocumentType) {
      return MongoHelper.map(DocumentType.ops[0])
    } else {
      throw new MongoDbError('add', 'documentType returned null')
    }
  }

  async loadAll (): Promise<LoadDocumentTypeRepository.Result> {
    const DocumentTypeCollection = await MongoHelper.getCollection('DocumentTypes')
    const query = new QueryBuilder()
      .lookup({
        from: 'DocumentTypeResults',
        foreignField: 'DocumentTypeId',
        localField: '_id',
        as: 'result'
      })
      .project({
        _id: 1,
        description: 1,
        date: 1
      })
      .build()
    const DocumentTypes = await DocumentTypeCollection.aggregate(query).toArray()
    return MongoHelper.mapCollection(DocumentTypes)
  }

  async loadById (id: string): Promise<LoadDocumentTypeByIdRepository.Result> {
    const DocumentTypeCollection = await MongoHelper.getCollection('DocumentTypes')
    const DocumentType = await DocumentTypeCollection.findOne({ _id: new ObjectId(id) })
    return DocumentType && MongoHelper.map(DocumentType)
  }

  async checkById (id: string): Promise<CheckDocumentTypeByIdRepository.Result> {
    const DocumentTypeCollection = await MongoHelper.getCollection('DocumentTypes')
    const DocumentType = await DocumentTypeCollection.findOne({
      _id: new ObjectId(id)
    }, {
      projection: {
        _id: 1
      }
    })
    return DocumentType !== null
  }

  async checkByDescription (description: string): Promise<CheckDocumentTypeByIdRepository.Result> {
    const DocumentTypeCollection = await MongoHelper.getCollection('DocumentTypes')
    const DocumentType = await DocumentTypeCollection.findOne({
      description
    }, {
      projection: {
        _id: 1
      }
    })
    return DocumentType !== null
  }
}
