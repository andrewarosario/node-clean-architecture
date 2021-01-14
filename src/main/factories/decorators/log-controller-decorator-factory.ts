import { LogControllerDecorator } from '@/main/decorators/log-controller-decorator'
import { Controller } from '@/presentation/protocols'
import { LogMongoRepository } from '@/infra/db/mongodb/log-repository/log-mongo-repository'

export const makeLogControllerDecorator = (controller: Controller<any>): Controller<any> => {
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(controller, logMongoRepository)
}
