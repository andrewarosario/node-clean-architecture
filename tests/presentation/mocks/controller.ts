import { Controller, HttpResponse } from '@/presentation/protocols'
import { ok } from '@/presentation/helpers'

import faker from 'faker'

export class ControllerSpy implements Controller {
  httpResponse = ok(faker.random.uuid())
  request: any

  async handle (request: any): Promise<HttpResponse> {
    this.request = request
    return this.httpResponse
  }
}
