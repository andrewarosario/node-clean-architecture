import { AddSurveyParams } from '@/domain/usecase/survey/add-survey'

export interface AddSurveyRepository {
  add (data: AddSurveyParams): Promise<void>
}
