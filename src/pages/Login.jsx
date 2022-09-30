import React,{useState} from 'react';
import {Link} from 'react-router-dom';

export const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [formError, setFormError] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError(validate(user))
  }

  const validate = (form) => {
    const error = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (!form.email) {
      error.email = 'Input email'
    } else if (!regex.test(form.email)) {
      error.email = 'Invalid email format'
    }

    if (!form.password) {
      error.password = 'Input password'
    } else if (form.password.length < 6) {
      error.password = 'Password must be up to 6 characters'
    } else {
      error.password = ''
    }

    return error
  }
  return (
    <div>
      <section className='relative flex flex-wrap lg:h-screen lg:items-center bg-black'>
        <div className='w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24 form bg-black'>
          <div className='max-w-lg mx-auto text-center'>
            <h1 className='text-2xl font-bold sm:text-3xl text-emerald-400'>
              Get started today!
            </h1>

            <p className='mt-4 text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className='max-w-md mx-auto mt-8 mb-0 space-y-4'
          >
            <div>
              <label htmlFor='email' className='sr-only'>
                Email
              </label>

              <div className='relative'>
                <input
                  type='email'
                  name='email'
                  value={user.email}
                  onChange={handleChange}
                  className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm bg-gray-300'
                  placeholder='Enter email'
                />

                <span className='absolute inset-y-0 inline-flex items-center right-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                    />
                  </svg>
                </span>
              </div>
              {formError.email && <span>{formError.email}</span>}
            </div>

            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <div className='relative'>
                <input
                  type='password'
                  name='password'
                  value={user.password}
                  onChange={handleChange}
                  className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm bg-gray-300'
                  placeholder='Enter password'
                  
                />

                <span className='absolute inset-y-0 inline-flex items-center right-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                </span>
              </div>
              {formError.password && <span>{formError.password}</span>}
            </div>

            <div className='flex items-center justify-between'>
              <p className='text-sm text-gray-400'>
                No account?
                <a href='#' className='underline text-emerald-400'>
                  Sign up
                </a>
              </p>

              <Link
                to='/'
                className='inline-block px-5 py-3 ml-3 text-sm font-medium text-black bg-orange-300 rounded-lg'
              >
                Sign in
              </Link>
              {/* <button
                type='submit'
                className='inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg'
                // onClick={() => handleClick('home')}
              >
                Sign in
              </button> */}
            </div>
          </form>
        </div>

        <div className='relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full'>
          <img
            alt='Welcome'
            src='https://images.unsplash.com/photo-1568909218940-9ca084ad57de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGdhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
            className='absolute inset-0 object-cover w-full h-full'
          />
        </div>
      </section>
    </div>
  )
}

