import React from 'react'
import './About.css'
import DesktopHeader from '../../components/desktop/DesktopHeader'
import MobileHeader from '../../components/mobile/MobileHeader'
import Footer from '../../components/universal/Footer'

export default function About() {
    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <header>
                    <MobileHeader />
                </header>
                <main id='aboutMain'>
                    <section>
                        <img src="https://i.ibb.co/KcnBW4t/katanpata-pirkkalainen.webp" alt='Katan Patan mainos Pirkkalaisessa'/>
                        <article className='prose'>
                            <h4>Pirkkalainen, 9.1.2019</h4>
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
                <main id='aboutMain'>
                    <section>
                        <img src="https://i.ibb.co/KcnBW4t/katanpata-pirkkalainen.webp" alt='Katan Patan mainos Pirkkalaisessa'/>
                        <article className='prose'>
                            <h4>Pirkkalainen, 9.1.2019</h4>
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