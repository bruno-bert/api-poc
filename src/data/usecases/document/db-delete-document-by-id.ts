import { DeleteDocumentById } from '@/domain/usecases'
import { DeleteDocumentByIdRepository, LoadDocumentByIdRepository, BucketDeleteDocumentByIdAdapter } from '@/data/protocols'
import { FileNotFoundError } from '@/domain/errors'

export class DbDeleteDocumentById implements DeleteDocumentById {
  constructor (
    private readonly loadDocumentByIdRepository: LoadDocumentByIdRepository,
    private readonly deleteDocumentByIdRepository: DeleteDocumentByIdRepository,
    private readonly deleteDocumentFromBucketByIdRepository?: BucketDeleteDocumentByIdAdapter) {}

  async deleteById (id: string): Promise<DeleteDocumentById.Result> {
    let result: boolean
    const document = await this.loadDocumentByIdRepository.loadById(id)

    if (document) {
      if (this.deleteDocumentByIdRepository) { result = await this.deleteDocumentByIdRepository.deleteById(id) }

      /** if document has bucket/file info, try to delete from bucket */
      if ((this.deleteDocumentFromBucketByIdRepository) && (document.file?.key)) {
        await this.deleteDocumentFromBucketByIdRepository.deleteById(document.file.key)
      }

      return result
    } else {
      throw new FileNotFoundError()
    }
  }
}
