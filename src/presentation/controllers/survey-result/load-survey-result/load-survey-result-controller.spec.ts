import { LoadSurveyResultController } from './load-survey-result-controller'
import { HttpRequest, LoadSurveyById, LoadSurveyResultControllerModel } from './load-survey-result-protocols'
import { mockLoadSurveyById } from '@/presentation/test'

type SutTypes = {
  sut: LoadSurveyResultController
  loadSurveyByIdStub: LoadSurveyById
}

const makeFakeRequest = (): HttpRequest<LoadSurveyResultControllerModel> => ({
  params: {
    surveyId: 'any_id'
  }
})

const makeSut = (): SutTypes => {
  const loadSurveyByIdStub = mockLoadSurveyById()
  const sut = new LoadSurveyResultController(loadSurveyByIdStub)
  return { sut, loadSurveyByIdStub }
}

describe('LoadSurveyResult Controller', () => {
  test('Shoul call LoadSurveyById with correct value', async () => {
    const { sut, loadSurveyByIdStub } = makeSut()
    const loadByIdSpy = jest.spyOn(loadSurveyByIdStub, 'loadById')
    await sut.handle(makeFakeRequest())
    expect(loadByIdSpy).toHaveBeenCalledWith('any_id')
  })
})
