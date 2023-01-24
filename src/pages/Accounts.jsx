import React from 'react';
import {Link} from 'react-router-dom'
import { MyLink } from '../components/Link'


export const Accounts = () => {
  const myStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGdhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60')",
    height: ' 100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  return (
    <div style={myStyle}>
      <MyLink />
      <div className='accountContainer'>
        <div className='accLink'>
          <ul>
            <li className='d-inline border-0 text-orange-400 bg-black px-6 py-1 rounded-full mx-2'>
              <Link to='/'>Home</Link>
            </li>
            <li className='d-inline border-0 text-orange-400 bg-black px-6 py-1 rounded-full mx-2'>
              <Link to='/Accounts/SocialAccounts'>Social Account</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-1/2 m-auto py-10'>
        <p className='text-white text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi eligendi unde est rerum labore! Impedit nesciunt commodi asperiores molestiae, facilis facere voluptates inventore iusto dolores sint minima praesentium dolor, consequuntur accusantium reiciendis rerum, ut deleniti. Alias magnam nobis reprehenderit eaque, laboriosam unde ut assumenda laudantium. Quis, qui aut, rem nobis ratione unde quidem doloribus doloremque libero harum tenetur a tempore consequuntur fugiat esse. Earum dignissimos dolorem minima impedit facilis cum similique id. Temporibus, itaque? Corporis veniam itaque quas officia reiciendis quaerat qui quibusdam voluptatem eos saepe ipsam veritatis necessitatibus quo perferendis temporibus, dolores provident? Assumenda quaerat inventore quae omnis corrupti.</p>
      </div>
    </div>
  )
}



 