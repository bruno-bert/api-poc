export class WeakPasswordError extends Error {
  constructor (paramName: string) {
    super(`Weak password: ${paramName}`)
    this.name = 'WeakPasswordError'
  }
}
