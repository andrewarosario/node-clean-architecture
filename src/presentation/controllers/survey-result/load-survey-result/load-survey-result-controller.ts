import { LoadSurveyById, LoadSurveyResultControllerModel, HttpRequest, HttpResponse, Controller } from './load-survey-result-protocols'

export class LoadSurveyResultController implements Controller<LoadSurveyResultControllerModel> {
  constructor (
    private readonly loadSurveyById: LoadSurveyById
  ) {}

  async handle (httpRequest: HttpRequest<LoadSurveyResultControllerModel>): Promise<HttpResponse> {
    await this.loadSurveyById.loadById(httpRequest.params.surveyId)
    return null
  }
}
