import React from 'react'
import Logo from './components/Logo'
import Balance from './components/Balance'
import Details from './components/Details'
import Footer from '../home/components/Footer'
import Security from './components/Security'

const Dashboard = () => {
  return (
    <>
        <Logo />
        <Balance />
        <Details />
        {/* <Footer /> */}
        <Security />
    </>
  )
}

export default Dashboard