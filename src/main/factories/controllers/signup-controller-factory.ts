import { makeDbAuthentication, makeSignUpValidation, makeLogControllerDecorator, makeDbAddAccount } from '@/main/factories'
import { makeValidationControllerDecorator } from '@/main/factories/decorators'
import { SignUpController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(makeDbAddAccount(), makeDbAuthentication())
  const validationControllerDecorator = makeValidationControllerDecorator(controller, makeSignUpValidation())
  return makeLogControllerDecorator(validationControllerDecorator)
}
