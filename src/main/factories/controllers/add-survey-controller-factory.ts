import { makeAddSurveyValidation, makeLogControllerDecorator, makeDbAddSurvey } from '@/main/factories'
import { makeValidationControllerDecorator } from '@/main/factories/decorators'
import { Controller } from '@/presentation/protocols'
import { AddSurveyController } from '@/presentation/controllers'

export const makeAddSurveyController = (): Controller => {
  const controller = new AddSurveyController(makeDbAddSurvey())
  const validationControllerDecorator = makeValidationControllerDecorator(controller, makeAddSurveyValidation())
  return makeLogControllerDecorator(validationControllerDecorator)
}
