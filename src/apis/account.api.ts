import http from 'helpers/http'
import { Account } from 'types/account.type'

export const registerAccount = (account: Omit<Account, 'id'>) => http.post<Account>('/account/register', account)

export const verifyAccount = () => http.post<Account>('/account/verify')

export const resetPassword = () => http.post<Account>('/account/reset-password')
