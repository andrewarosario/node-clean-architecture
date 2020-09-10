import { LoginController } from '../../../../../presentation/controllers/auth/login/login-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeLoginValidation } from './login-validation-factory'
import { LoginModel } from '../../../../../presentation/controllers/auth/login/models/login-model'
import { makeDbAuthentication } from '../../../usecases/account/authentication/db-authentication-factory'
import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'

export const makeLoginController = (): Controller<LoginModel> => {
  const controller = new LoginController(makeLoginValidation(), makeDbAuthentication())
  return makeLogControllerDecorator(controller)
}
