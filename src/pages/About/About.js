import React from 'react'
import './About.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function About() {
    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <header>
                    <Navbar />
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
                    <Navbar />
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