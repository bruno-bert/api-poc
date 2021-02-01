import { DirectoryModel } from '@/domain/models'

export interface LoadDirectoryRepository {
  loadAll: (accountId: string) => Promise<LoadDirectoryRepository.Result>
}

export namespace LoadDirectoryRepository {
  export type Result = DirectoryModel[]
}
