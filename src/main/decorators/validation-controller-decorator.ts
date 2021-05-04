import { Controller, HttpResponse, Validation } from '@/presentation/protocols'

export class ValidationControllerDecorator implements Controller {
  constructor (
    private readonly controller: Controller,
    private readonly validation: Validation
  ) {}

  async handle (request: any): Promise<HttpResponse> {
    this.validation.validate(request)
    return this.controller.handle(request)
  }
}
