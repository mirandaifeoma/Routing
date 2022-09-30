import React, {useState, useEffect} from 'react';
import { MyLink } from '../components/Link'
import {useParams} from 'react-router-dom';


export const Details = () => {
  let {id} = useParams();
  const [user, setUser] = useState({})
  // console.log(id);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setUser(data)
    })
  }, [id])
  return (
    <div>
      <MyLink />
      <div className='bg-gray-400 details px-7'>
        <h1 className='text-2xl text-center py-7 text-blue-900  '>
          Details Of Users
        </h1>
        {user && (
          <div className='leading-8 font-sans font-bolder'>
            <h1 className='font-sans font-medium tracking-wide text-xl'>Name : {user.name}</h1>
            <p>
              Email : <span className='text-purple-500 '>{user.email}</span>
            </p>
            <p>Body : {user.body}</p>
          </div>
        )}
      </div>
    </div>
  )
}

