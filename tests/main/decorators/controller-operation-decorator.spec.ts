import { ControllerOperationDecorator } from '@/main/decorators'
import { ControllerSpy } from '@/tests/presentation/mocks/controller'
import faker from 'faker'

type SutTypes = {
  sut: ControllerOperationDecorator
  controllerSpy: ControllerSpy
}

const makeSut = (): SutTypes => {
  const controllerSpy = new ControllerSpy()
  const sut = new ControllerOperationDecorator(controllerSpy)
  return {
    sut,
    controllerSpy
  }
}

describe('ControllerOperation Decorator', () => {
  test('Should call controller handle', async () => {
    const { sut, controllerSpy } = makeSut()
    const request = faker.lorem.sentence()
    await sut.handle(request)
    expect(controllerSpy.request).toEqual(request)
  })
})
