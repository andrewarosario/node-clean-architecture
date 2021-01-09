import { HttpRequest, HttpResponse } from './http'

export interface Controller<T = any> {
  handle (httpRequest: HttpRequest<T>): Promise<HttpResponse>
}
