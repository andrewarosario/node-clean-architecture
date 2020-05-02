export class ServerError extends Error {
  constructor () {
    super('Internal Server Error')
    this.name = 'ServerError'
  }
}
