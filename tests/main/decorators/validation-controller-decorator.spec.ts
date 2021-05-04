import { ValidationControllerDecorator } from '@/main/decorators'
import { MissingParamError } from '@/presentation/errors'
import { badRequest } from '@/presentation/helpers'
import { ValidationSpy } from '@/tests/presentation/mocks'
import { ControllerSpy } from '@/tests/presentation/mocks/controller'

import faker from 'faker'

type SutTypes = {
  sut: ValidationControllerDecorator
  controllerSpy: ControllerSpy
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const controllerSpy = new ControllerSpy()
  const validationSpy = new ValidationSpy()
  const sut = new ValidationControllerDecorator(controllerSpy, validationSpy)
  return {
    sut,
    controllerSpy,
    validationSpy
  }
}

describe('ValidationController Decorator', () => {
  test('Should call Validation with correct value', async () => {
    const { sut, validationSpy } = makeSut()
    const request = faker.lorem.sentence()
    await sut.handle(request)
    expect(validationSpy.input).toEqual(request)
  })

  test('Should return 400 if Validation returns an error', async () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.error = new MissingParamError(faker.random.word())
    const httpResponse = await sut.handle(faker.lorem.sentence())
    expect(httpResponse).toEqual(badRequest(validationSpy.error))
  })

  test('Should call controller handle', async () => {
    const { sut, controllerSpy } = makeSut()
    const request = faker.lorem.sentence()
    await sut.handle(request)
    expect(controllerSpy.request).toEqual(request)
  })

  test('Should return the same result of the controller', async () => {
    const { sut, controllerSpy } = makeSut()
    const httpResponse = await sut.handle(faker.lorem.sentence())
    expect(httpResponse).toEqual(controllerSpy.httpResponse)
  })
})
