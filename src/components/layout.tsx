import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />

      <main>{ children }</main>

      <Footer />
    </>
  )
}

export default Layout;
