import { LogControllerDecorator } from '@/main/decorators'
import { LogMongoRepository } from '@/infra/db'
import { Controller } from '@/presentation/protocols'
import { makeControllerOperationDecorator } from './controller-operation-decorator-factory'

export const makeLogControllerDecorator = (controller: Controller): Controller => {
  const logMongoRepository = new LogMongoRepository()
  const controllerOperationDecorator = makeControllerOperationDecorator(controller)
  return new LogControllerDecorator(controllerOperationDecorator, logMongoRepository)
}
