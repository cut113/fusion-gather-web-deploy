export interface Account {
  firstName: string
  lastName: string
  username: string
  password: string
  id: string
  phoneNumber: string
  dob: string
  email: string
  verificationCode: string
  isVerified: boolean
}

export type Accounts = Account[]
