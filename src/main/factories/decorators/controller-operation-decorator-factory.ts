import { ControllerOperationDecorator } from '@/main/decorators'
import { Controller } from '@/presentation/protocols'

export const makeControllerOperationDecorator = (controller: Controller): Controller => {
  return new ControllerOperationDecorator(controller)
}
