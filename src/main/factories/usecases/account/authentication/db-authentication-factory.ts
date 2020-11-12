import env from '@/main/config/env'
import { BcryptAdapter } from '@/infra/criptography/bcrypt-adapter/bcrypt-adapter'
import { AccountMongoRepository } from '@/infra/db/mongodb/account/account-mongo-repository'
import { JwtAdapter } from '@/infra/criptography/jwt-adapter/jwt-adapter'
import { DbAuthentication } from '@/data/usecases/account/authentication/db-authentication'
import { Authentication } from '@/domain/usecase/account/authentication'

export const makeDbAuthentication = (): Authentication => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  return new DbAuthentication(accountMongoRepository, bcryptAdapter, jwtAdapter, accountMongoRepository)
}
