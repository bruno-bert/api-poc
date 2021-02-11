import { get as lodashGet } from 'lodash'

export const _get = (object: any, propertyName: string): any => {
  return lodashGet(object, propertyName)
}
