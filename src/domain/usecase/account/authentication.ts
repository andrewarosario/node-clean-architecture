export interface AuthenticationParams {
  email: string
  password: string
}

export interface Authentication {
  auth (authentication: AuthenticationParams): Promise<string>
}
