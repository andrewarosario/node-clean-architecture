import { ControllerOperationDecorator } from '@/main/decorators'
import { throwError } from '@/tests/domain/mocks'
import { mockServerError } from '@/tests/presentation/mocks'
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

  test('Should return the same result of the controller on success', async () => {
    const { sut, controllerSpy } = makeSut()
    const httpResponse = await sut.handle(faker.lorem.sentence())
    expect(httpResponse).toEqual(controllerSpy.httpResponse)
  })

  test('Should return 500 if controller throws', async () => {
    const { sut, controllerSpy } = makeSut()
    jest.spyOn(controllerSpy, 'handle').mockImplementationOnce(throwError)
    const serverError = mockServerError()
    const httpResponse = await sut.handle(faker.lorem.sentence())
    expect(httpResponse).toEqual(serverError)
  })
})
