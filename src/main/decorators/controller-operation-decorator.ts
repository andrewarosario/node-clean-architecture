import { Controller, HttpResponse } from '@/presentation/protocols'

export class ControllerOperationDecorator implements Controller {
  constructor (
    private readonly controller: Controller
  ) {}

  async handle (request: any): Promise<HttpResponse> {
    return this.controller.handle(request)
  }
}
