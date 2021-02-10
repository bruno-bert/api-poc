import { makeLogControllerDecorator, makeBucketDeleteDocument } from '@/main/factories'
import { makeDeleteDocumentFromBucketValidation } from '@/validation/factories/document'
import { Controller } from '@/presentation/protocols'
import { DeleteDocumentController } from '@/presentation/controllers'

export const makeDeleteDocumentFromBucketController = (): Controller => {
  const controller = new DeleteDocumentController(
    makeDeleteDocumentFromBucketValidation(), 
    makeBucketDeleteDocument())
  return makeLogControllerDecorator(controller)
}
