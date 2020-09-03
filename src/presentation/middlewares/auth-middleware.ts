import { Middleware, HttpRequest, HttpResponse } from '../protocols'
import { forbidden } from '../helpers/http/http-helper'
import { AccessDeniedError } from '../errors'

export class AuthMiddleware implements Middleware<any> {
  async handle (httpRequest: HttpRequest<any>): Promise<HttpResponse> {
    return forbidden(new AccessDeniedError())
  }
}
