import { serverError } from '@/presentation/helpers'
import { HttpResponse } from '@/presentation/protocols'

export const mockServerError = (): HttpResponse => {
  const fakeError = new Error()
  fakeError.stack = 'any_stack'
  return serverError(fakeError)
}
