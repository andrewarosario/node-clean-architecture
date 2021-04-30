import { serverError } from '@/presentation/helpers'
import { Controller, HttpResponse } from '@/presentation/protocols'

export class ControllerOperationDecorator implements Controller {
  constructor (
    private readonly controller: Controller
  ) {}

  async handle (request: any): Promise<HttpResponse> {
    try {
      return this.controller.handle(request)
    } catch (error) {
      return serverError(error)
    }
  }
}
