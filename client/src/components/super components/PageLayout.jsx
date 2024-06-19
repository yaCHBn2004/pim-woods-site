import React from 'react'
import Nav from './Nav'
import Footer from './Footer'


const PageLayout = () => {
  return (
    <div className='min-h-screen flex flex-col bg-bg'>
      <Nav />
      <div className='flex-grow'></div>
      <Footer />
    </div>
  )
}

export default PageLayout