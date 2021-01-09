import { } from '@/domain/usecase/survey-result/load-survey-result'
import { InvalidParamError } from '@/presentation/errors'
import { forbidden, serverError } from '@/presentation/helpers/http/http-helper'
import { LoadSurveyById, LoadSurveyResult, LoadSurveyResultControllerModel, HttpRequest, HttpResponse, Controller } from './load-survey-result-protocols'

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
      await this.loadSurveyResult.load(surveyId)
      return null
    } catch (error) {
      return serverError(error)
    }
  }
}
