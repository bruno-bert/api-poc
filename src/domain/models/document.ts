import { DocumentTypeModel, DirectoryModel } from '@/domain/models'
export type DocumentModel = {
  id: string
  name: string
  directory: DirectoryModel
  file: FileModel
  documentType: DocumentTypeModel
  date: Date
}

export type FileModel = {
  originalname: string
  size: string
  key: string
  type: string
  url: string
}
