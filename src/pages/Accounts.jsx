import React from 'react';
import {Link} from 'react-router-dom'
import { MyLink } from '../components/Link'


export const Accounts = () => {
  return (
    <div>
      <MyLink />
      <div className='accountContainer'>
        <div className='accLink'>
          <ul>
            <li className='d-inline border-0 text-orange-400 bg-black px-6 py-1 rounded-full mx-2'>
              <Link to='/ '>Home</Link>
            </li>
            <li className='d-inline border-0 text-orange-400 bg-black px-6 py-1 rounded-full mx-2'>
              <Link to='/Accounts/SocialAccounts'>Social Account</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}



 