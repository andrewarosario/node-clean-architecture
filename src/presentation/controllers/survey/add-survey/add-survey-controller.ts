import { Controller, HttpRequest, HttpResponse, AddSurveyModel } from './add-survey-controller-protocols'
import { Validation } from '../../../protocols'

export class AddSurveyController implements Controller<AddSurveyModel> {
  constructor (
    private readonly validation: Validation
  ) {}

  async handle (httpRequest: HttpRequest<any>): Promise<HttpResponse> {
    this.validation.validate(httpRequest.body)
    return Promise.resolve(null)
  }
}
