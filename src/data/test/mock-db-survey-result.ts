import { SaveSurveyResultRepository } from '@/data/protocols/db/survey-result/save-survey-result-repository'
import { SurveyResultModel } from '@/domain/models/survey-result'
import { SaveSurveyResultParams } from '@/domain/usecase/survey-result/save-survey-result'
import { mockSurveyResultModel } from '@/domain/test'

export const mockSaveSurveyResultRepository = (): SaveSurveyResultRepository => {
  class SaveSurveyResultRepositoryStub implements SaveSurveyResultRepository {
    async save (data: SaveSurveyResultParams): Promise<SurveyResultModel> {
      return Promise.resolve(mockSurveyResultModel())
    }
  }
  return new SaveSurveyResultRepositoryStub()
}
