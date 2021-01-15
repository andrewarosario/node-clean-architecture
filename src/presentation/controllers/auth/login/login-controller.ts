import { Controller, HttpRequest, HttpResponse, Authentication, Validation, LoginModel } from './login-controller-protocols'
import { badRequest, serverError, unauthorized, ok } from '@/presentation/helpers/http/http-helper'

export class LoginController implements Controller<LoginModel> {
  constructor (
    private readonly authentication: Authentication,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest<LoginModel>): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { email, password } = httpRequest.body

      const authenticationModel = await this.authentication.auth({ email, password })
      if (!authenticationModel) {
        return unauthorized()
      }
      return ok(authenticationModel)
    } catch (error) {
      return serverError(error)
    }
  }
}
