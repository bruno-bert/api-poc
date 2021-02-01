import { DocumentTypeModel, DirectoryModel } from '@/domain/models'
export type DocumentModel = {
  id: string
  name: string
  directory: DirectoryModel
  path: string
  documentType: DocumentTypeModel
  date: Date
}
