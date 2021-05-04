import { makeDbAuthentication, makeLoginValidation, makeLogControllerDecorator } from '@/main/factories'
import { makeValidationControllerDecorator } from '@/main/factories/decorators'
import { Controller } from '@/presentation/protocols'
import { LoginController } from '@/presentation/controllers'

export const makeLoginController = (): Controller => {
  const controller = new LoginController(makeDbAuthentication())
  const validationControllerDecorator = makeValidationControllerDecorator(controller, makeLoginValidation())
  return makeLogControllerDecorator(validationControllerDecorator)
}
