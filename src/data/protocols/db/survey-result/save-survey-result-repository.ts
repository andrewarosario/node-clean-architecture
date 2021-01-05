import { SaveSurveyResultParams } from '@/domain/usecase/survey-result/save-survey-result'

export interface SaveSurveyResultRepository {
  save (data: SaveSurveyResultParams): Promise<void>
}
