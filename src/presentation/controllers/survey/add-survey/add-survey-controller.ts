import { Controller, HttpRequest, HttpResponse, AddSurveyControllerModel, AddSurvey } from './add-survey-controller-protocols'
import { Validation } from '../../../protocols'
import { badRequest } from '../../../helpers/http/http-helper'

export class AddSurveyController implements Controller<AddSurveyControllerModel> {
  constructor (
    private readonly validation: Validation,
    private readonly addSurvey: AddSurvey
  ) {}

  async handle (httpRequest: HttpRequest<AddSurveyControllerModel>): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if (error) {
      return badRequest(error)
    }

    await this.addSurvey.add(httpRequest.body)

    return Promise.resolve(null)
  }
}
