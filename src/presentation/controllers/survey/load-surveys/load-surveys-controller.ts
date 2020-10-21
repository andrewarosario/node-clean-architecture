import { noContent, ok, serverError } from '../../../helpers/http/http-helper'
import { Controller, HttpRequest, HttpResponse, LoadSurveysControllerModel, LoadSurveys } from './load-surveys-controller-protocols'

export class LoadSurveysController implements Controller<LoadSurveysControllerModel> {
  constructor (
    private readonly loadSurveys: LoadSurveys
  ) {}

  async handle (httpRequest: HttpRequest<LoadSurveysControllerModel>): Promise<HttpResponse> {
    try {
      const surveys = await this.loadSurveys.load()
      return surveys.length ? ok(surveys) : noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}
