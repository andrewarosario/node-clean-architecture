import { ValidationControllerDecorator } from '@/main/decorators'
import { Controller, Validation } from '@/presentation/protocols'

export const makeValidationControllerDecorator = (controller: Controller, validation: Validation): Controller => {
  return new ValidationControllerDecorator(controller, validation)
}
