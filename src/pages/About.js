import React from 'react'
import './styles.css'
import DesktopHeader from '../components/desktop/DesktopHeader'
import MobileHeader from '../components/mobile/MobileHeader'
import Footer from '../components/universal/Footer'

export default function About() {
    if(window.innerWidth < 750) {
        return(
            <div className="container">
                <MobileHeader />
                <div className="content">
                
                </div>
                {/*END OF CONTENT*/}
                <Footer />
            </div>
        )
    }else {
        return(
            <div className="container">
                <DesktopHeader />
                <div className="content">
    
                </div>
                {/*END OF CONTENT*/}
                <Footer />
            </div>
        )
    }
}