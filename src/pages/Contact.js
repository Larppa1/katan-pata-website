import React from 'react'
import './styles.css'
import DesktopHeader from '../components/desktop/DesktopHeader'
import MobileHeader from '../components/mobile/MobileHeader'
import Footer from '../components/universal/Footer'

export default function Contact() {
    if(window.innerWidth < 750) {
        return(
            <div className="container">
                <MobileHeader />
                <div className="content">
                    <article className='prose'>
                        <h2 style={{textAlign: 'center'}}>Ota yhteyttä</h2>
                        <h3 style={{textAlign: 'center'}}>Katariina Juva<br/>
                            040 56 44 049<br/>
                            katanpata@gmail.com
                        </h3>
                    </article>
                    <div style={{paddingBlock: '10vh'}}>
                        <article className='prose'>
                            <h3 style={{textAlign: 'center'}}>Anna palautetta!</h3>
                        </article>
                    </div>
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
                    <article className='prose'>
                        <h1 style={{textAlign: 'center'}}>Ota yhteyttä</h1>
                        <h2 style={{textAlign: 'center'}}>Katariina Juva<br/><br/>
                            040 56 44 049<br/><br/>
                            katanpata@gmail.com
                        </h2>
                    </article>
                </div>
                {/*END OF CONTENT*/}
                <Footer />
            </div>
        )
    }
}