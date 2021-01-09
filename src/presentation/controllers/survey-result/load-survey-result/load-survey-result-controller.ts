import { InvalidParamError } from '@/presentation/errors'
import { forbidden, serverError } from '@/presentation/helpers/http/http-helper'
import { LoadSurveyById, LoadSurveyResultControllerModel, HttpRequest, HttpResponse, Controller } from './load-survey-result-protocols'

export class LoadSurveyResultController implements Controller<LoadSurveyResultControllerModel> {
  constructor (
    private readonly loadSurveyById: LoadSurveyById
  ) {}

  async handle (httpRequest: HttpRequest<LoadSurveyResultControllerModel>): Promise<HttpResponse> {
    try {
      const survey = await this.loadSurveyById.loadById(httpRequest.params.surveyId)
      if (!survey) {
        return forbidden(new InvalidParamError('surveyId'))
      }
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}
