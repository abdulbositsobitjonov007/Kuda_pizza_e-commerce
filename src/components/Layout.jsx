import React from 'react'
import HeaderMemo from './Header'
import FooterMemo from './Footer'
import { Outlet } from 'react-router-dom'
import FooterPanelMemo from './FooterPanel'

function Layout() {
  return (
    <>
    <HeaderMemo />
    <main>
        <Outlet />
    </main>
    <FooterMemo />
    <FooterPanelMemo />
    </>
  )
}

export default Layout