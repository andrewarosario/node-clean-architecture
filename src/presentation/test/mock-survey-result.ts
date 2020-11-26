import { SurveyResultModel } from '@/domain/models/survey-result'
import { mockSurveyResultModel } from '@/domain/test'
import { SaveSurveyResult, SaveSurveyResultParams } from '@/domain/usecase/survey-result/save-survey-result'

export const mockSaveSurveyResult = (): SaveSurveyResult => {
  class SaveSurveyResultStub implements SaveSurveyResult {
    async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
      return Promise.resolve(mockSurveyResultModel())
    }
  }

  return new SaveSurveyResultStub()
}
