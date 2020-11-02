import { Controller, HttpRequest, HttpResponse, AddSurveyControllerModel, AddSurvey } from './add-survey-controller-protocols'
import { Validation } from '@/presentation/protocols'
import { badRequest, serverError, noContent } from '@/presentation/helpers/http/http-helper'

export class AddSurveyController implements Controller<AddSurveyControllerModel> {
  constructor (
    private readonly validation: Validation,
    private readonly addSurvey: AddSurvey
  ) {}

  async handle (httpRequest: HttpRequest<AddSurveyControllerModel>): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { question, answers } = httpRequest.body

      await this.addSurvey.add({
        question,
        answers,
        date: new Date()
      })

      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
