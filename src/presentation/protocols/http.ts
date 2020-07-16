export interface HttpResponse {
  statusCode: number
  body: any
}

export interface HttpRequest<T> {
  body?: T
}
