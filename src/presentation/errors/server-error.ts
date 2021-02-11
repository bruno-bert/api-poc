export class ServerError extends Error {
  constructor (stack: string) {
    const message = process.env.SHOW_INTERNAL_ERROR ? `Internal server error: ${stack}` : 'Internal server error'
    super(message)
    this.name = 'ServerError'
    this.stack = stack
  }
}
