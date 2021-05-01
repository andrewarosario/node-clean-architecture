import { Controller, HttpResponse } from '@/presentation/protocols'
import { forbidden, ok } from '@/presentation/helpers'
import { InvalidParamError } from '@/presentation/errors'
import { LoadAnswersBySurvey, SaveSurveyResult } from '@/domain/usecases'

export class SaveSurveyResultController implements Controller {
  constructor (
    private readonly loadAnswersBySurvey: LoadAnswersBySurvey,
    private readonly saveSurveyResult: SaveSurveyResult
  ) {}

  async handle (request: SaveSurveyResultController.Request): Promise<HttpResponse> {
    const { accountId, surveyId, answer } = request
    const answers = await this.loadAnswersBySurvey.loadAnswers(surveyId)
    if (!answers.length) {
      return forbidden(new InvalidParamError('surveyId'))
    } else if (!answers.includes(answer)) {
      return forbidden(new InvalidParamError('answer'))
    }
    const surveyResult = await this.saveSurveyResult.save({
      accountId,
      surveyId,
      answer,
      date: new Date()
    })
    return ok(surveyResult)
  }
}

export namespace SaveSurveyResultController {
  export type Request = {
    surveyId: string
    answer: string
    accountId: string
  }
}
