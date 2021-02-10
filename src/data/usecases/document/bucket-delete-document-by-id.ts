import { DeleteDocumentById } from '@/domain/usecases'
import { BucketDeleteDocumentByIdAdapter, LoadDocumentByIdRepository, UpdateDocumentByIdRepository } from '@/data/protocols'

export class BucketDeleteDocumentById implements DeleteDocumentById {
  constructor (
    private readonly loadDocumentByIdRepository: LoadDocumentByIdRepository,
    private readonly updateDocumentByIdRepository: UpdateDocumentByIdRepository,
    private readonly bucketDeleteDocumentByIdAdapter: BucketDeleteDocumentByIdAdapter) {}

  async deleteById (id: string): Promise<DeleteDocumentById.Result> {

    let result: boolean
    const document = await this.loadDocumentByIdRepository.loadById(id)
    
    if (document?.file?.key)    
      result = await this.bucketDeleteDocumentByIdAdapter.deleteById(document.file.key)
      
    if (document) {
      delete document.file 
      this.updateDocumentByIdRepository.updateById(id, document)
    }

    return result  
  }
}
