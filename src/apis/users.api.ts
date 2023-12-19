import { Users, User } from 'types/user.type'
import http from 'helpers/http'

export const getUsers = () => http.get<Users>('dummy')

export const getUser = (id: string | number) => http.get<User>(`dummy/${id}`)

export const AddUser = (user: Omit<User, 'id'>) => http.post<User>('dummy', user)

export const UpdateUser = (id: string | number, user: User) => http.patch<User>(`dummy/${id}`, user)

export const DeleteUser = (id: string | number) => http.delete<{}>(`dummy/${id}`)
