import { DocumentModel } from '@/domain/models'
import { AddDocumentController } from '@/presentation/controllers'
import { setDocumentUrl } from '@/presentation/utils'
import { FileViewModel } from '.'

const mapFileRequestToModel = (request: AddDocumentController.Request): FileViewModel => {
  const { file } = request
  return file?.originalname ? {
    originalname: file.originalname,
    size: file.size,
    key: file.key,
    url: setDocumentUrl(file),
    type: file.mimetype
  } : null
}

export const mapAddRequestToModel = (request: AddDocumentController.Request): Omit<DocumentModel,'id'> => {
  return {
    name: request.file?.originalname || request.name ,
    documentType: { description: request.documentType || 'general' },
    directory: { name: request.directory || 'root' },
    file: mapFileRequestToModel(request),
    accountId: request.accountId,
    date: new Date()
  }
}
