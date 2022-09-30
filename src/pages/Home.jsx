import React from 'react';
import { MyLink } from '../components/Link';
import {SideBar} from '../components/SideBar';
import {Body} from '../components/Body';

export const Home = () => {
  return (
    <div className='home'>
      <MyLink />
      <Body />
      <SideBar />
    </div>
  )
}

