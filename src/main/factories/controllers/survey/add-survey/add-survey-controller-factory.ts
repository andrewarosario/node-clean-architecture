import { Controller } from '../../../../../presentation/protocols'
import { AddSurveyControllerModel } from '../../../../../presentation/controllers/survey/add-survey/models/add-survey-controller-model'
import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'
import { AddSurveyController } from '../../../../../presentation/controllers/survey/add-survey/add-survey-controller'
import { makeAddSurveyValidation } from './add-survey-validation-factory'
import { makeDbAddSurvey } from '../../../usecases/survey/add-survey/db-add-survey-factory'

export const makeAddSurveyController = (): Controller<AddSurveyControllerModel> => {
  const controller = new AddSurveyController(makeAddSurveyValidation(), makeDbAddSurvey())
  return makeLogControllerDecorator(controller)
}
