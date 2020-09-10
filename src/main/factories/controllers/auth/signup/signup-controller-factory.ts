import { SignUpController } from '../../../../../presentation/controllers/auth/signup/signup-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeSignUpValidation } from './signup-validation-factory'
import { SignUpModel } from '../../../../../presentation/controllers/auth/signup/models/signup-model'
import { makeDbAuthentication } from '../../../usecases/account/authentication/db-authentication-factory'
import { makeDbAddAccount } from '../../../usecases/account/add-account/db-add-account-factory'
import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'

export const makeSignUpController = (): Controller<SignUpModel> => {
  const controller = new SignUpController(makeDbAddAccount(), makeSignUpValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}
