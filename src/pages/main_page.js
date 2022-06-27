import React, { useState } from 'react'

import Header from '../components/header';
import Footer from '../components/footer';

import '../styles/main_page.scss'

import { Outlet } from 'react-router-dom'
import Seasons from '../components/seasons';

export default function Main() {

  return (
    <div className='mainPage'>
      <Header /> 
      <div className='page'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}