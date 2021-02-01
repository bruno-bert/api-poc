import { MongoHelper, QueryBuilder } from '@/infra/db'
import {
  AddDirectoryRepository,
  LoadDirectoryRepository,
  CheckDirectoryByNameRepository
} from '@/data/protocols/db'
import { MongoDbError } from '@/infra/errors'

export class DirectoryMongoRepository implements AddDirectoryRepository, LoadDirectoryRepository, CheckDirectoryByNameRepository {
  async add (data: AddDirectoryRepository.Params): Promise<AddDirectoryRepository.Result> {
    const DirectoryypeCollection = await MongoHelper.getCollection('directories')
    const Directory = await DirectoryypeCollection.insertOne(data)
    if (Directory) {
      return MongoHelper.map(Directory.ops[0])
    } else {
      throw new MongoDbError('add', 'Directory returned null')
    }
  }

  async loadAll (accountId: string): Promise<LoadDirectoryRepository.Result> {
    const DirectoryCollection = await MongoHelper.getCollection('directories')
    const query = new QueryBuilder()
      .match({
        accountId
      })
      .lookup({
        from: 'DirectoryResults',
        foreignField: 'DirectoryId',
        localField: '_id',
        as: 'result'
      })
      .project({
        _id: 1,
        name: 1,
        directory: 1,
        path: 1,
        date: 1
      })
      .build()
    const Directorys = await DirectoryCollection.aggregate(query).toArray()
    return MongoHelper.mapCollection(Directorys)
  }

  async checkByName (accountId: string, name: string): Promise<CheckDirectoryByNameRepository.Result> {
    const DirectoryCollection = await MongoHelper.getCollection('directories')
    const Directory = await DirectoryCollection.findOne({
      accountId,
      name
    }, {
      projection: {
        _id: 1
      }
    })
    return Directory !== null
  }
}
