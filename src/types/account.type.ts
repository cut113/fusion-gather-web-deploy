export interface Account {
  firstname: string
  lastname: string
  username: string
  password: string
  id: string
  phone: string
  dob: string
  email: string
  verificationCode: string
  isVerified: boolean
}

export type Accounts = Account[]
