import { ValidationControllerDecorator } from '@/main/decorators'
import { makeDbAuthentication, makeSignUpValidation, makeLogControllerDecorator, makeDbAddAccount } from '@/main/factories'
import { SignUpController } from '@/presentation/controllers'
import { Controller } from '@/presentation/protocols'

export const makeSignUpController = (): Controller => {
  const controller = new SignUpController(makeDbAddAccount(), makeDbAuthentication())
  const validationControllerDecorator = new ValidationControllerDecorator(controller, makeSignUpValidation())
  return makeLogControllerDecorator(validationControllerDecorator)
}
