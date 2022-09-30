import React from 'react';
import {Link} from 'react-router-dom';
import { MyLink } from '../components/Link'


export const About = () => {
  return (
    <div>
      <MyLink />

      <div className='AboutConatiner'>
        <div className='aboutImg'>
          <img
            src='https://images.unsplash.com/photo-1659535915214-e7cbac112038?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8NTB8fGdhbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
            alt=''
          />
        </div>
        <div className='AboutDetails'>
          <h1>Explore</h1>
          <h5 className='mb-4 text-justify'>
            Explore is a website dedicated to proprietary stock photography.
            Since 2021, it has been owned by Getty Images. The website claims
            over 265,000 contributing photographers and generates more than 16
            billion photo impressions per month on their growing library of over
            3.48 million photos
          </h5>
          <div className='leading-10'>
            <p>
              <span>Date launched: 2013</span>
            </p>
            <p>
              <span>Headquarters:</span>
              Montreal, Quebec
            </p>
            <p>
              <span>Founder(s):</span>
              <Link to='/Coment' className='text-red-400'>
                View Founders
              </Link>
              <span>; Stephanie Liverani; Angus Woodman</span>
            </p>
            <p>
              <span>Content license: nonfree</span>
            </p>
            <p>
              <span>Owner:</span>
              <Link href='' className='text-red-400'>
                Getty Images
              </Link>
            </p>
            <p>
              <span>Categories:</span>
              <Link href='' className='text-red-400'>
                Photography,
              </Link>{' '}
              <Link href='' className='text-red-400'>
                Stock photography
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

