import { AddSurveyParams } from '@/domain/usecase/survey/add-survey'

export interface AddSurveyRepository {
  add (surveyData: AddSurveyParams): Promise<void>
}
