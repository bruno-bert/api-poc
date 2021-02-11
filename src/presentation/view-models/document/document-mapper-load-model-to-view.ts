import { DocumentModel } from '@/domain/models'
import { DocumentViewModel } from '.'

export const mapModelToView = (entity: DocumentModel): DocumentViewModel => {
  return {
    ...entity,
    date: entity.date.toISOString(),
    directory: entity.directory.name,
    documentType: entity.documentType.description
  }
}

export const mapModelToViewCollection = (entities: DocumentModel[]): DocumentViewModel[] => {
  return entities.map(entity => mapModelToView(entity))
}
