import { Controller, HttpResponse } from '@/presentation/protocols'
import { unauthorized, ok } from '@/presentation/helpers'
import { Authentication } from '@/domain/usecases'

export class LoginController implements Controller {
  constructor (
    private readonly authentication: Authentication
  ) {}

  async handle (request: LoginController.Request): Promise<HttpResponse> {
    const { email, password } = request
    const authenticationModel = await this.authentication.auth({
      email,
      password
    })
    if (!authenticationModel) {
      return unauthorized()
    }
    return ok(authenticationModel)
  }
}

export namespace LoginController {
  export type Request = {
    email: string
    password: string
  }
}
