import { DirectoryModel } from '@/domain/models'

export interface AddDirectory {
  add: (data: AddDirectory.Params) => Promise<AddDirectory.Result>
}

export namespace AddDirectory {
  export type Params = Omit<DirectoryModel, 'id'> & { accountId: string}
  export type Result = DirectoryModel
}
