import { DocumentTypeModel, DirectoryModel } from '@/domain/models'
export type DocumentModel = {
  id: string
  name: string
  directory: RelationalDirectoryModel
  file?: FileModel
  documentType: RelationalDocumentTypeModel
  date: Date
  accountId: string
}

export type RelationalDirectoryModel = Omit<DirectoryModel,'id'|'date'>
export type RelationalDocumentTypeModel = Omit<DocumentTypeModel,'id'|'date'>

export type FileModel = {
  originalname: string
  size: string
  key: string
  type: string
  url: string
}
