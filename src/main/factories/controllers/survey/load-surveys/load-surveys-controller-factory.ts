import { LoadSurveysController } from '../../../../../presentation/controllers/survey/load-surveys/load-surveys-controller'
import { LoadSurveysControllerModel } from '../../../../../presentation/controllers/survey/load-surveys/load-surveys-controller-protocols'
import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'
import { makeDbLoadSurveys } from '../../../usecases/survey/load-surveys/db-load-surveys'

export const makeLoadSurveysController = (): Controller<LoadSurveysControllerModel> => {
  const controller = new LoadSurveysController(makeDbLoadSurveys())
  return makeLogControllerDecorator(controller)
}
