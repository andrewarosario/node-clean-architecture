import { HttpRequest, HttpResponse, Controller, AddAccount, SignUpModel } from './signup-controller-protocols'
import { badRequest, serverError, ok } from '../../helpers/http/http-helper'
import { Validation } from '../../protocols/validation'

export class SignUpController implements Controller<SignUpModel> {
  constructor (
    private readonly addAccount: AddAccount,
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest<SignUpModel>): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { name, email, password } = httpRequest.body

      const account = await this.addAccount.add({ name, email, password })

      return ok(account)
    } catch (error) {
      console.error(error)
      return serverError(error)
    }
  }
}
