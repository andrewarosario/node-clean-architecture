import { Controller, HttpResponse } from '@/presentation/protocols'
import { noContent } from '@/presentation/helpers'
import { AddSurvey } from '@/domain/usecases'

export class AddSurveyController implements Controller {
  constructor (
    private readonly addSurvey: AddSurvey
  ) {}

  async handle (request: AddSurveyController.Request): Promise<HttpResponse> {
    const { question, answers } = request
    await this.addSurvey.add({
      question,
      answers,
      date: new Date()
    })
    return noContent()
  }
}

export namespace AddSurveyController {
  export type Request = {
    question: string
    answers: Answer[]
  }

  type Answer = {
    image?: string
    answer: string
  }
}
