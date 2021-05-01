import { Controller, HttpResponse } from '@/presentation/protocols'
import { noContent, ok } from '@/presentation/helpers'
import { LoadSurveys } from '@/domain/usecases'

export class LoadSurveysController implements Controller {
  constructor (private readonly loadSurveys: LoadSurveys) {}

  async handle (request: LoadSurveysController.Request): Promise<HttpResponse> {
    const surveys = await this.loadSurveys.load(request.accountId)
    return surveys.length ? ok(surveys) : noContent()
  }
}

export namespace LoadSurveysController {
  export type Request = {
    accountId: string
  }
}
