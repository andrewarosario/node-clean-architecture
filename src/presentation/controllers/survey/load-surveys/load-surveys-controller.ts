import { Controller, HttpRequest, HttpResponse, LoadSurveysControllerModel, LoadSurveys } from './load-surveys-controller-protocols'

export class LoadSurveysController implements Controller<LoadSurveysControllerModel> {
  constructor (
    private readonly loadSurveys: LoadSurveys
  ) {}

  async handle (httpRequest: HttpRequest<LoadSurveysControllerModel>): Promise<HttpResponse> {
    await this.loadSurveys.load()
    return null
  }
}
