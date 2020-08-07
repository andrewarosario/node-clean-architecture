import { AddSurveyModel } from '../../../../domain/usecase/add-survey'

export interface AddSurveyRepository {
  add (surveyData: AddSurveyModel): Promise<void>
}
