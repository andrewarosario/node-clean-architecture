import { Middleware, HttpRequest, HttpResponse } from '../protocols'
import { forbidden, ok } from '../helpers/http/http-helper'
import { AccessDeniedError } from '../errors'
import { LoadAccountByToken } from '../../domain/usecase/load-account-by-token'

export class AuthMiddleware implements Middleware<any> {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken
  ) {

  }

  async handle (httpRequest: HttpRequest<any>): Promise<HttpResponse> {
    const accessToken = httpRequest.headers?.['x-access-token']
    if (accessToken) {
      const account = await this.loadAccountByToken.load(accessToken)
      if (account) {
        return ok({ accountId: account.id })
      }
    }
    return forbidden(new AccessDeniedError())
  }
}
