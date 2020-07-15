import { AddAccountModel } from '../../../../domain/usecase/add-account'
import { AccountModel } from '../../../../domain/models/account'

export interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}
