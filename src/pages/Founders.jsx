import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { MyLink } from '../components/Link';

const url = 'https://jsonplaceholder.typicode.com/comments'


export const Founders = () => {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setUser(json.slice(0, 100))
        setLoading(false)
      })

      .catch((err) => {
        setError(err)
        console.log(err)
      })
  }, [])

  if (error) return 'Error just occured'
  else if (loading) return 'loading...'

  return (
    <div>
      <MyLink />

      <div className='mytable'>
        <table class='table '>
          <thead>
            <tr>
              <th scope='col'>Id</th>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
              <th scope='col'>Body</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user.id} className="odd:bg-white even:bg-yelow-400">
                <th scope='row'>{user.id}</th>
                <th scope='row' >{user.name}</th>
                <th scope='row'>{user.email}</th>
                <th scope='row' className='text-justify'>{user.body}</th>
                <td className='about'>
                  <Link to={`/Founders/${user.id}`}>Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

