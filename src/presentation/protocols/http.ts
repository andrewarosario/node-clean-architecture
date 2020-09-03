export interface HttpResponse {
  statusCode: number
  body: any
}

export interface HttpRequest<T> {
  headers?: any
  body?: T
}
