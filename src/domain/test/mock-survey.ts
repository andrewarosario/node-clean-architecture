import { SurveyModel } from '@/domain/models/survey'
import { AddSurveyParams } from '@/domain/usecase/survey/add-survey'

export const mockSurveyModel = (): SurveyModel => ({
  id: 'any_id',
  question: 'any_question',
  answers: [
    { answer: 'any_answer' },
    { answer: 'other_answer', image: 'any_image' }
  ],
  date: new Date()
})

export const mockSurveyModels = (): SurveyModel[] => {
  return [{
    id: 'any_id',
    question: 'any_question',
    answers: [{ image: 'any_image', answer: 'any_answer' }],
    date: new Date()
  }, {
    id: 'other_id',
    question: 'other_question',
    answers: [{ image: 'other_image', answer: 'other_answer' }],
    date: new Date()
  }]
}

export const mockAddSurveyParams = (): AddSurveyParams => ({
  question: 'any_question',
  answers: [{
    image: 'any_image',
    answer: 'any_answer'
  }],
  date: new Date()
})
