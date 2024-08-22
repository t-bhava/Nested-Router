import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'
import ThemeFoot from './ThemeFoot'

const Layout = () => {
  return (
    <div>
        <Navigation/>
        <main>
            <Outlet/>
        </main>
        <ThemeFoot/>

    </div>
  )
}

export default Layout