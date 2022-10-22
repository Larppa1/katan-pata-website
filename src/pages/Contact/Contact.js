import React from 'react'
import './Contact.css'
import DesktopHeader from '../../components/desktop/DesktopHeader'
import MobileHeader from '../../components/mobile/MobileHeader'
import Footer from '../../components/universal/Footer'

export default function Contact() {
    if(window.innerWidth < 750) {
        return(
            <div className="container">
                <header>
                    <MobileHeader />
                </header>
                <main>
                    <section id='contactMainContent'>
                        <article className='prose'>
                            <h1 style={{textAlign: 'center'}}>Ota yhteyttä</h1>
                            <h2 style={{textAlign: 'center'}}>Katariina Juva<br/>
                                040 56 44 049<br/>
                                katanpata@gmail.com
                            </h2>
                        </article>
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }else {
        return(
            <div className="container">
                <header>
                    <DesktopHeader />
                </header>
                <main>
                    <section id='contactMainContent'>
                        <article className='prose'>
                            <h1 style={{textAlign: 'center'}}>Ota yhteyttä</h1>
                            <h2 style={{textAlign: 'center'}}>Katariina Juva<br/>
                                040 56 44 049<br/>
                                katanpata@gmail.com
                            </h2>
                        </article>
                    </section>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}