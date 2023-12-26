import http from 'helpers/http'
import { Account } from 'types/account.type'

export const registerAccount = (account: Omit<Account, 'id' | 'verificationCode' | 'isVerified'>) =>
  http.post<Account>('/account/register', account)

export const verifyAccount = (body: { code: string; username: string }) => http.post<Account>('/account/verify', body)

export const resetPassword = () => http.post<Account>('/account/reset-password')

export const getAccount = () => http.get<Account>('/account')
