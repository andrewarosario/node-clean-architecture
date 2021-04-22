import { LoadSurveys } from '@/domain/usecases'
import { LoadSurveysRepository } from '@/data/protocols'

export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveysRepository: LoadSurveysRepository) {}

  async load (accountId: string): Promise<LoadSurveys.Result> {
    const surveys = await this.loadSurveysRepository.loadAll(accountId)
    return surveys
  }
}
