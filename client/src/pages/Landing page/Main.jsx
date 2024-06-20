import React from 'react'
import {About, Header, Contact, Trends} from './sections'
import BackToTopButton from '../../utils/BackToTopButton'

const Main = () => {
    return (
        <div>
            <BackToTopButton/>
            <Header/>
            <About/>
            <Trends/>
            <Contact/>
        </div>

    )
}

export default Main