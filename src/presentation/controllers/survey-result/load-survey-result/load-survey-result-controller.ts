import { LoadSurveyById, LoadSurveyResult, LoadSurveyResultControllerModel, HttpRequest, HttpResponse, Controller } from './load-survey-result-protocols'
import { InvalidParamError } from '@/presentation/errors'
import { forbidden, ok, serverError } from '@/presentation/helpers/http/http-helper'

export class LoadSurveyResultController implements Controller<LoadSurveyResultControllerModel> {
  constructor (
    private readonly loadSurveyById: LoadSurveyById,
    private readonly loadSurveyResult: LoadSurveyResult
  ) {}

  async handle (httpRequest: HttpRequest<LoadSurveyResultControllerModel>): Promise<HttpResponse> {
    const { surveyId } = httpRequest.params
    try {
      const survey = await this.loadSurveyById.loadById(surveyId)
      if (!survey) {
        return forbidden(new InvalidParamError('surveyId'))
      }
      const surveyResult = await this.loadSurveyResult.load(surveyId)
      return ok(surveyResult)
    } catch (error) {
      return serverError(error)
    }
  }
}
