import { LoadAnswersBySurveyRepository } from '@/data/protocols'
import { LoadAnswersBySurvey } from '@/domain/usecases'

export class DbLoadAnswersBySurvey implements LoadAnswersBySurvey {
  constructor (private readonly loadAnswersBySurveyRepository: LoadAnswersBySurveyRepository) {}

  async loadAnswers (id: string): Promise<LoadAnswersBySurvey.Result> {
    return this.loadAnswersBySurveyRepository.loadAnswers(id)
  }
}
