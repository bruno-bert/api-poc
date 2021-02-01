import { DocumentTypeModel } from '@/domain/models'
export type DocumentModel = {
  id: string
  name: string
  directory: string
  path: string
  documentType: DocumentTypeModel
  date: Date
}
