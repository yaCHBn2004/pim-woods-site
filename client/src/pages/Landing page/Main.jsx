import React, { useEffect } from 'react'
import { About, Header, Contact, Trends } from './sections'

const Main = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    
    return (
        <div className='mx-auto'>
            <Header />
            <About />
            <Trends />
            <Contact />
        </div>
    )
}

export default Main