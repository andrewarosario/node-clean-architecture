import { Authentication, AuthenticationParams } from '@/presentation/controllers/auth/login/login-controller-protocols'
import { AccountModel } from '@/domain/models/account'
import { AddAccount, AddAccountParams } from '@/domain/usecase/account/add-account'
import { mockAccountModel } from '@/domain/test'
import { LoadAccountByToken } from '@/domain/usecase/account/load-account-by-token'

export const mockAddAccount = (): AddAccount => {
  class AddAccountStub implements AddAccount {
    async add (account: AddAccountParams): Promise<AccountModel> {
      return Promise.resolve(mockAccountModel())
    }
  }

  return new AddAccountStub()
}

export const mockAuthentication = (): Authentication => {
  class AuthenticationStub implements Authentication {
    async auth (authentication: AuthenticationParams): Promise<string> {
      return 'any_token'
    }
  }

  return new AuthenticationStub()
}

export const mockLoadAccountByToken = (): LoadAccountByToken => {
  class LoadAccountByTokenStub implements LoadAccountByToken {
    async load (accessToken: string): Promise<AccountModel> {
      return Promise.resolve(mockAccountModel())
    }
  }
  return new LoadAccountByTokenStub()
}
