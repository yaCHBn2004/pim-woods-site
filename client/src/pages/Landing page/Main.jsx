import React, { useEffect } from 'react'
import { About, Header, Contact, Trends } from './sections'
import BackToTopButton from '../../utils/BackToTopButton'

const Main = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    
    return (
        <div className='mx-auto'>
            <BackToTopButton />
            <Header />
            {/* <About />
            <Trends />
            <Contact /> */}
        </div>
    )
}

export default Main