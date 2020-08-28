import { HttpRequest, HttpResponse } from './http'

export interface Middleware<T> {
  handle (httpRequest: HttpRequest<T>): Promise<HttpResponse>
}
