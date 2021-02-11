export class DocumentViewModel {
  id: string
  name: string
  directory: string
  file?: FileViewModel
  documentType: string
  date: string
  accountId: string
}

export type FileViewModel = {
  originalname: string
  size: string
  key: string
  type: string
  url: string
}
