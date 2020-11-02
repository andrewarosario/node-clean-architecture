import { makeSignUpValidation } from './signup-validation-factory'
import { makeDbAuthentication } from '@/main/factories/usecases/account/authentication/db-authentication-factory'
import { makeDbAddAccount } from '@/main/factories/usecases/account/add-account/db-add-account-factory'
import { makeLogControllerDecorator } from '@/main/factories/decorators/log-controller-decorator-factory'
import { SignUpController } from '@/presentation/controllers/auth/signup/signup-controller'
import { Controller } from '@/presentation/protocols'
import { SignUpModel } from '@/presentation/controllers/auth/signup/models/signup-model'

export const makeSignUpController = (): Controller<SignUpModel> => {
  const controller = new SignUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}
