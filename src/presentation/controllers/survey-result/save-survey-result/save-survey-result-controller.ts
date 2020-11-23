import { Controller, HttpRequest, HttpResponse, SaveSurveyResultControllerModel, LoadSurveyById } from './save-survey-result-protocols'
import { InvalidParamError } from '@/presentation/errors'
import { forbidden, serverError, ok } from '@/presentation/helpers/http/http-helper'
import { SaveSurveyResult } from '@/domain/usecase/survey-result/save-survey-result'

export class SaveSurveyResultController implements Controller<SaveSurveyResultControllerModel> {
  constructor (
    private readonly loadSurveyById: LoadSurveyById,
    private readonly saveSurveyResult: SaveSurveyResult
  ) {}

  async handle (httpRequest: HttpRequest<SaveSurveyResultControllerModel>): Promise<HttpResponse> {
    const { surveyId } = httpRequest.params
    const { answer } = httpRequest.body
    const { accountId } = httpRequest
    try {
      const survey = await this.loadSurveyById.loadById(surveyId)
      if (survey) {
        const answers = survey.answers.map(a => a.answer)
        if (!answers.includes(answer)) {
          return forbidden(new InvalidParamError('answer'))
        }
      } else {
        return forbidden(new InvalidParamError('surveyId'))
      }

      const surveyResult = await this.saveSurveyResult.save({
        accountId,
        answer,
        surveyId,
        date: new Date()
      })
      return ok(surveyResult)
    } catch (error) {
      return serverError(error)
    }
  }
}
