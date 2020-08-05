import { Controller, HttpRequest, HttpResponse, AddSurveyModel } from './add-survey-controller-protocols'
import { Validation } from '../../../protocols'
import { badRequest } from '../../../helpers/http/http-helper'

export class AddSurveyController implements Controller<AddSurveyModel> {
  constructor (
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest<any>): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if (error) {
      return badRequest(error)
    }

    return Promise.resolve(null)
  }
}
