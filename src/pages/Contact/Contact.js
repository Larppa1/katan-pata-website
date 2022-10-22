import React from 'react'
import './Contact.css'
import DesktopHeader from '../../components/desktop/DesktopHeader'
import MobileHeader from '../../components/mobile/MobileHeader'
import Footer from '../../components/universal/Footer'

export default function Contact() {
    return(
        <div className="container">
            <header>
                <MobileHeader />
            </header>
            <main id='contactMain'>
                <section id='contactMainContent'>
                    <article className='prose'>
                        <h1>Ota yhteyttä</h1>
                        <h2>Katariina Juva<br/>
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