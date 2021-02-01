import { AddDirectory } from '@/domain/usecases'
import { DirectoryModel } from '@/domain/models'

export interface AddDirectoryRepository {
  add: (data: AddDirectoryRepository.Params) => Promise<AddDirectoryRepository.Result>
}

export namespace AddDirectoryRepository {
  export type Params = AddDirectory.Params
  export type Result = DirectoryModel
}
