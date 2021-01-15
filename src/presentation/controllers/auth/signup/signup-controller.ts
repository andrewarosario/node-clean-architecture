import { HttpRequest, HttpResponse, Controller, AddAccount, SignUpModel, Authentication } from './signup-controller-protocols'
import { badRequest, serverError, ok, forbidden } from '@/presentation/helpers/http/http-helper'
import { Validation } from '@/presentation/protocols/validation'
import { EmailInUseError } from '@/presentation/errors'

export class SignUpController implements Controller<SignUpModel> {
  constructor (
    private readonly addAccount: AddAccount,
    private readonly validation: Validation,
    private readonly authentication: Authentication
  ) {}

  async handle (httpRequest: HttpRequest<SignUpModel>): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { name, email, password } = httpRequest.body

      const account = await this.addAccount.add({ name, email, password })
      if (!account) {
        return forbidden(new EmailInUseError())
      }
      const authenticationModel = await this.authentication.auth({ email, password })

      return ok(authenticationModel)
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}
