import { dataTagSymbol, useMutation, useQuery } from '@tanstack/react-query'
import { AddUser, getUser, UpdateUser } from 'apis/users.api'
import http from 'helpers/http'
import { useState } from 'react'
import { NavLink, useMatch, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { User } from 'types/user.type'

type FormState = Omit<User, 'id'> | User

const initialFormState: FormState = {
  name: '',
  phone: '',
  dob: ''
}

export default function UserController() {
  const [userInfor, setUserInfor] = useState<FormState>(initialFormState)
  const addMatch = useMatch('/user/add')
  const isAddMode = Boolean(addMatch)
  const { id } = useParams()

  const { mutate } = useMutation({
    mutationFn: (body: FormState) => {
      return AddUser(body)
    }
  })

  useQuery({
    queryKey: ['user', id],
    queryFn: async () => {
      const data = await getUser(id as string)
      setUserInfor(data.data)
    },
    enabled: id !== undefined
  })

  const updateUser = useMutation({
    mutationFn: (_) => UpdateUser(id as string, userInfor as User)
  })

  const handleChange = (name: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfor((prev) => ({
      ...prev,
      [name]: event.target.value
    }))
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isAddMode) {
      mutate(userInfor, {
        onSuccess: () => {
          setUserInfor(initialFormState)
          toast.success('Add Successful')
        },
        onError: (error) => {
          // Handle error here
          if (userInfor === null) {
            console.error('Add error:', error)
            toast.error('Add Failed')
          }
        }
      })
    } else {
      updateUser.mutate(undefined, {
        onSuccess: (data) => {
          toast.success('Update Successful')
        },
        onError: (error) => {
          // Handle error here
          console.error('Update error:', error)
          toast.error('Update Failed')
        }
      })
    }
  }

  return (
    <div>
      <h1 className='text-lg'> {isAddMode ? 'Add User' : 'Edit User'} </h1>
      <form className='mt-6' onSubmit={handleSubmit}>
        <div className='group relative z-0 mb-6 w-full'>
          <input
            type='name'
            name='floating_name'
            id='floating_name'
            className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 '
            placeholder=''
            required
            value={userInfor.name}
            onChange={handleChange('name')}
          />
          <label
            htmlFor='floating_name'
            className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 '
          >
            Name
          </label>
        </div>

        <div className='group relative z-0 mb-6 w-full'>
          <input
            type='text'
            name='phone'
            id='phone'
            className='peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 '
            placeholder=' '
            required
            value={userInfor.phone}
            onChange={handleChange('phone')}
          />
          <label
            htmlFor='phone'
            className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 '
          >
            Phone
          </label>
        </div>

        <div className='relative max-w-sm'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
            </svg>
          </div>
          <input
            type='date'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Select date'
            value={userInfor.dob}
            onChange={handleChange('dob')}
          />
        </div>
        <button
          type='submit'
          className='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto mt-6'
          // onClick={() => {
          //   setTimeout(() => {
          //     window.location.href = '/user'
          //   }, 2000)
          // }}
        >
          {isAddMode ? 'Add' : 'Update'}
        </button>
      </form>
    </div>
  )
}
