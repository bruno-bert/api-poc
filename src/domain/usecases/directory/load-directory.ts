import { DirectoryModel } from '@/domain/models'

export interface LoadDirectory {
  load: (accountId: string) => Promise<LoadDirectory.Result>
}

export namespace LoadDirectory {
  export type Result = DirectoryModel[]
}
