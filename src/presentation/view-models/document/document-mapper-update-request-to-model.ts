import { DocumentModel } from '@/domain/models'
import { UpdateDocumentByIdController } from '@/presentation/controllers'
import { setDocumentUrl } from '@/presentation/utils'
import { FileViewModel } from '.'

const mapFileRequestToModel = (request: UpdateDocumentByIdController.Request): FileViewModel => {
  const { file } = request
  return file?.originalname ? {
    originalname: file.originalname,
    size: file.size,
    key: file.key,
    url: setDocumentUrl(file),
    type: file.mimetype
  } : null
}

export const mapUpdateRequestToModel = (request: UpdateDocumentByIdController.Request): DocumentModel => {
  return {
    id: request.id,
    name: request.file?.originalname || request.name ,
    documentType: { description: request.documentType || 'general' },
    directory: { name: request.directory || 'root' },
    file: mapFileRequestToModel(request),
    accountId: request.accountId,
    date: new Date()
  }
}
