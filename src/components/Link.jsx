import React from 'react'
import { Link } from 'react-router-dom'

export const MyLink = () => {
  return (
    <div className='navContainer'>
      <nav className='myNav'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj14QGxUxw9yjLsZJXfKfPkdRnvCgbzziZGztHI3ZIBTOp09IIex7z9pcYviViaqiqZTY&usqp=CAU'
          alt=''
          style={{ width: '70px', height: '30px', objectFit: 'cover' }}
        />
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Product'>Product</Link>
        <Link to='/Founders'>Founders</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/Email'>Email</Link>
        <Link to='/Accounts'>Accounts</Link>
        <Link to='/Login' className='logout'>
          Logout
        </Link>
      </nav>
    </div>
  )
}
