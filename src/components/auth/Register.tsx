import React, { useState } from 'react'
import { Account } from 'types/account.type'
import { useMutation } from '@tanstack/react-query'
import { registerAccount, verifyAccount } from 'apis/account.api'
import { toast } from 'react-toastify'
import { boolean } from 'yargs'

type FormState = Omit<Account, 'id' | 'verificationCode' | 'isVerified'> | Account

const initialFormState: FormState = {
  firstName: '',
  lastName: '',
  username: '',
  password: '',
  phoneNumber: '',
  dob: '',
  email: ''
}

const initialFormStateVerifyCode: { code: string; username: string } = {
  username: '',
  code: ''
}
function Register() {
  const [accountInfor, setAccountInfor] = useState(initialFormState)

  const [isSuccess, setIsSuccess] = useState(false)

  const [accountCode, setAccountCode] = useState(initialFormStateVerifyCode)
  const { mutate } = useMutation({
    mutationFn: (body: FormState) => {
      return registerAccount(body)
    }
  })

    // const {Codemutate} = useMutation({
    //   mutationFn: (body:{ code: string; username: string }) => {
    //     return verifyAccount(body)
    //   }
    // })

  const handleChange = (name: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccountInfor((prev) => ({
      ...prev,
      [name]: event.target.value
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    mutate(accountInfor, {
      onSuccess: () => {
        setAccountInfor(initialFormState)
        toast.success('Register Successful')
        setIsSuccess(true)
      },
      onError: (error) => {
        if (accountInfor === null) {
          console.error('Register error:', error)
          toast.error('Register Failed')
        }
      }
    })

  }
  // const handleCodeSubmit = () => {
  //   Codemutate(accountCode, {
  //     onSuccess: () => {
  //       setAccountCode(initialFormStateVerifyCode)
  //       toast.success('Verified')
  //       setIsSuccess(true)
  //     },
  //     onError: (error) => {
  //       if (accountCode === null) {
  //         console.error('Register error:', error)
  //         toast.error('Register Failed')
  //       }
  //     }
  //   })
  // }
  if (isSuccess === true) {
    return (
      <div>
        <div>
          <label className='text-gray-800 font-semibold block my-3 text-md' htmlFor='email'>
            Code
          </label>
          <input
            className='w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none'
            type='text'
            name='verificationCode'
            id='verificationCode'
            placeholder='verificationCode'
            value={accountCode.code}
            onChange={(e) => {
              setAccountCode((prev) => ({
                ...prev,
                code: e.target.value
              }))
            }}
          />
        </div>
        <button
            type='submit'
            className='w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans'
          >
            Submit
          </button>
      </div>
    )
  }

  return (
    <div className='h-screen bg-indigo-100 flex justify-center items-center'>
      <div className='lg:w-2/5 md:w-1/2 w-2/3'>
        <form className='bg-white p-10 rounded-lg shadow-lg min-w-full' onSubmit={handleSubmit}>
          <h1 className='text-center text-2xl mb-6 text-gray-600 font-bold font-sans'>Register</h1>
          <div>
            <label className='text-gray-800 font-semibold block my-3 text-md' htmlFor='First name'>
              First name
            </label>
            <input
              className='w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none'
              type='text'
              name='firstname'
              id='firstname'
              placeholder='firstname'
              value={accountInfor.firstName}
              onChange={handleChange('firstName')}
            />
          </div>
          <div>
            <label className='text-gray-800 font-semibold block my-3 text-md' htmlFor='Last name'>
              Last name
            </label>
            <input
              className='w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none'
              type='text'
              name='lastname'
              id='lastname'
              placeholder='lastname'
              value={accountInfor.lastName}
              onChange={handleChange('lastName')}
            />
          </div>
          <div>
            <label className='text-gray-800 font-semibold block my-3 text-md' htmlFor='username'>
              Username
            </label>
            <input
              className='w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none'
              type='text'
              name='username'
              id='username'
              placeholder='username'
              value={accountInfor.username}
              onChange={handleChange('username')}
            />
          </div>
          <div>
            <label className='text-gray-800 font-semibold block my-3 text-md' htmlFor='email'>
              Email
            </label>
            <input
              className='w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none'
              type='text'
              name='email'
              id='email'
              placeholder='@email'
              value={accountInfor.email}
              onChange={handleChange('email')}
            />
          </div>
          <div>
            <label className='text-gray-800 font-semibold block my-3 text-md' htmlFor='phonenumber'>
              Phone Number
            </label>
            <input
              className='w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none'
              type='number'
              name='phone'
              id='phone'
              placeholder='phone number'
              value={accountInfor.phoneNumber}
              onChange={handleChange('phoneNumber')}
            />
          </div>
          <div>
            <label className='text-gray-800 font-semibold block my-3 text-md' htmlFor='password'>
              Password
            </label>
            <input
              className='w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none'
              type='text'
              name='password'
              id='password'
              placeholder='password'
              value={accountInfor.password}
              onChange={handleChange('password')}
            />
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
              className='w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none'
              placeholder='Select date'
              value={accountInfor.dob}
              onChange={handleChange('dob')}
            />
          </div>
          <button
            type='submit'
            className='w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans'
          >
            Register
          </button>
          <button
            type='submit'
            className='w-full mt-6 mb-3 bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold font-sans'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
