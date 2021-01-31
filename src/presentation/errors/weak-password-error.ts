import { RequestError } from '@/domain/errors'

export class WeakPasswordError extends RequestError {
  constructor (paramName: string) {
    super(`Weak password: ${paramName}`)
    this.name = 'WeakPasswordError'
  }
}
