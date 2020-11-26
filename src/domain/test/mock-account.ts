import { AccountModel } from '@/domain/models/account'
import { AddAccountParams } from '@/domain/usecase/account/add-account'
import { AuthenticationParams } from '@/domain/usecase/account/authentication'

export const mockAddAccountParams = (): AddAccountParams => ({
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'any_password'
})

export const mockAccountModel = (): AccountModel => ({
  id: 'any_id',
  ...mockAddAccountParams()
})

export const mockFakeAuthentication = (): AuthenticationParams => ({
  email: 'any_email@mail.com',
  password: 'any_password'
})
