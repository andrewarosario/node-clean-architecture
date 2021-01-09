import { LoadSurveyResultController } from './load-survey-result-controller'
import { HttpRequest, LoadSurveyResultControllerModel } from './load-survey-result-protocols'
import { mockLoadSurveyById } from '@/presentation/test'

const makeFakeRequest = (): HttpRequest<LoadSurveyResultControllerModel> => ({
  params: {
    surveyId: 'any_id'
  }
})

describe('LoadSurveyResult Controller', () => {
  test('Shoul call LoadSurveyById with correct value', async () => {
    const loadSurveyByIdStub = mockLoadSurveyById()
    const sut = new LoadSurveyResultController(loadSurveyByIdStub)
    const loadByIdSpy = jest.spyOn(loadSurveyByIdStub, 'loadById')
    await sut.handle(makeFakeRequest())
    expect(loadByIdSpy).toHaveBeenCalledWith('any_id')
  })
})
