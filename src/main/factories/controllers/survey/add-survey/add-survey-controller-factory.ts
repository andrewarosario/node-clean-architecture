import { Controller } from '../../../../../presentation/protocols'
import { AddSurveyControllerModel } from '../../../../../presentation/controllers/survey/add-survey/models/add-survey-controller-model'
import { makeAddSurveyValidation } from './add-survey-validation-factory'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { makeDbAddSurvey } from '@/main/factories/usecases/survey/add-survey/db-add-survey-factory'
import { AddSurveyController } from '@/presentation/controllers/survey/add-survey/add-survey-controller'

export const makeAddSurveyController = (): Controller<AddSurveyControllerModel> => {
  const controller = new AddSurveyController(makeAddSurveyValidation(), makeDbAddSurvey())
  return makeLogControllerDecorator(controller)
}
