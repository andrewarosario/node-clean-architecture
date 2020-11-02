import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeDbLoadSurveys } from '@/main/factories/usecases/survey/load-surveys/db-load-surveys'
import { LoadSurveysController } from '@/presentation/controllers/survey/load-surveys/load-surveys-controller'
import { LoadSurveysControllerModel } from '@/presentation/controllers/survey/load-surveys/load-surveys-controller-protocols'
import { Controller } from '@/presentation/protocols'

export const makeLoadSurveysController = (): Controller<LoadSurveysControllerModel> => {
  const controller = new LoadSurveysController(makeDbLoadSurveys())
  return makeLogControllerDecorator(controller)
}
