import { Controller, HttpRequest, HttpResponse, SaveSurveyResultModel, LoadSurveyById } from './save-survey-result-protocols'

export class SaveSurveyResultController implements Controller<SaveSurveyResultModel> {
  constructor (
    private readonly loadSurveyById: LoadSurveyById
  ) {}

  async handle (httpRequest: HttpRequest<SaveSurveyResultModel>): Promise<HttpResponse> {
    await this.loadSurveyById.loadById(httpRequest.params.surveyId)
    return null
  }
}
