import { AddSurveyModel } from '@/domain/usecase/survey/add-survey'

export interface AddSurveyRepository {
  add (surveyData: AddSurveyModel): Promise<void>
}
