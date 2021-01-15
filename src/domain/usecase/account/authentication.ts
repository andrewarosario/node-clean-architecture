import { AuthenticationModel } from '@/domain/models/authentication'

export interface AuthenticationParams {
  email: string
  password: string
}

export interface Authentication {
  auth (authenticationParams: AuthenticationParams): Promise<AuthenticationModel>
}
