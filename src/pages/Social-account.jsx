import React from 'react'
import { Link } from 'react-router-dom'
import { Accounts } from './Accounts'

export const SocialAccounts = () => {
  const myStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGdhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60')",
    fontSize: '20px',
    height: ' 79vh',
    lineHeight: '4rem',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <div>
      <Accounts />
      <div>
        lor
        <div className='bg-scroll' style={myStyle}>
          <ul className='pl-8 list-outside'>
            <li className='list-disc marker:text-yellow-400 '>
              <a href='https://www.netflix.com/ng/login' className='text-pale underline'>
                Netflix
              </a>
            </li>
            <li className='list-disc marker:text-yellow-400'>
              <a href='https://twitter.com/' className='text-pale underline'>
                Twitter
              </a>
            </li>
            <li className='list-disc marker:text-yellow-400'>
              <a
                href='https://webmail.au.syrahost.com/'
                className=' text-pale underline'
              >
                Email
              </a>
            </li>
            <li className='list-disc marker:text-yellow-400'>
              <a href='#' className=' text-pale underline'>
                Whatsapp
              </a>  
            </li>
            <li className='list-disc marker:text-yellow-400'>
              <a
                href='https://web.facebook.com/?_rdc=1&_rdr'
                className=' text-pale underline'
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
