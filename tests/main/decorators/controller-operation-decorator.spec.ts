import { ControllerOperationDecorator } from '@/main/decorators'
import { ControllerSpy } from '@/tests/presentation/mocks/controller'
import faker from 'faker'

describe('ControllerOperation Decorator', () => {
  test('Should call controller handle', async () => {
    const controllerSpy = new ControllerSpy()
    const sut = new ControllerOperationDecorator(controllerSpy)

    const request = faker.lorem.sentence()
    await sut.handle(request)
    expect(controllerSpy.request).toEqual(request)
  })
})
