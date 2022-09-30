import React from 'react';
import { MyLink } from '../components/Link';




export const Email = () => {
  return (
    <div>
      <MyLink />
          <section style={{backgroundColor:'black'}}>
        <div class='px-2 py-0 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
          <div class='grid grid-cols-1 lg:grid-cols-2 lg:h-screen'>
            <div class='relative z-10 lg:py-16 bg-black' >
              <div class='relative h-64 sm:h-80 lg:h-full'>
                <img
                  alt='House'
                  src='https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                  class='absolute inset-0 object-cover w-full h-full'
                />
              </div>
            </div>

            <div class='relative flex items-center bg-gray-400'>
              <span class='hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16'></span>

              <div class='p-4 sm:p-16 lg:p-24'>
                <h2 class='text-2xl font-bold sm:text-3xl'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore, debitis.
                </h2>

                <p class='mt-4 text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid, molestiae! Quidem est esse numquam odio deleniti,
                  beatae, magni dolores provident quaerat totam eos, aperiam
                  architecto eius quis quibusdam fugiat dicta.
                </p>

                <a
                  href='mailto:mirandaifeoma2222@gmail.com'
                  
                  class='group inline-block px-12 py-3 mt-8 text-sm font-medium text-indigo-400 bg-black border rounded focus:outline-none focus:ring'
                >
                  Send <span className="group-hover:text-red-600 ">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

