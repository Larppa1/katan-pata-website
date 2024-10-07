import React from 'react'
import './Pricing.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function Pricing() {
    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main id='pricingMain'>
                    <section id='pricingMainTitle'>
                        <article className="prose">
                            <h1>Hinnasto</h1>
                            <h3>Kaikkien palvelujen hinnat ovat kiinteitä tuntihintoja</h3>
                        </article>
                    </section>
                    <section id='pricingMainContent'>
                        <article className="prose">
                            <section>
                                <h3>Alv 25.5%</h3>
                                <h3>Alv 0%</h3>
                                <h3>La klo 07-18</h3>
                                <h3>Su klo 11-17</h3>
                            </section>
                            <section>
                                <h3>47€/h</h3>
                                <h3>37.45€/h</h3>
                                <h3>46.81€/h</h3>
                                <h3>74.90€/h</h3>
                            </section>
                        </article>
                    </section>
                    <section id='pricingMainContentSecondary'>
                        <article className="prose">
                            <section>
                                <p>Matkakuluja ei erikseen peritä, jos kohde on alle 10 kilometrin päässä Pirkkalan keskustasta.<br/><br/>
                                    Yli 10 kilometrin päässä olevista kohteista matkakuluista veloitetaan:<br/><br/>
                                </p>
                            </section>
                            <section>
                                <section>
                                    <h3>Alv 0%</h3>
                                </section>
                                <section>
                                    <h3>0,57€/km</h3>
                                </section>
                            </section>
                        </article>
                    </section>
                    <section id='pricingMainBottom'>
                        <article className='prose'>
                            <p>Muista 60% kotitalousvähennys. Katso lisää kotitalousvähennyksestä Verohallinnon sivuilta painamalla <span><a className='link' href='https://www.vero.fi/henkiloasiakkaat/verokortti-ja-veroilmoitus/vahennykset/kotitalousvahennys/' target='_blank' rel='noreferrer'>tästä</a></span>.<br/><br/></p>
                            <p>HUOM! Alle 24 tunnin sisällä peruutetusta asiakaskäynnistä veloitetaan 43€ (sis. alv).</p>
                            <h2>Katariina<br/>
                                040 56 44 049<br/>
                                TAI<br/>
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
                    <Navbar />
                </header>
                <main id='pricingMain'>
                    <section id='pricingMainTitle'>
                        <article className="prose">
                            <h1>Hinnasto</h1>
                            <h2>Kaikkien palvelujen hinnat ovat kiinteitä tuntihintoja</h2>
                        </article>
                    </section>
                    <section id='pricingMainContent'>
                        <article className="prose">
                            <section>
                                <h2>Alv 25.5%</h2>
                                <h2>Alv 0%</h2>
                                <h2>La klo 07-18</h2>
                                <h2>Su klo 11-17</h2>
                            </section>
                            <section>
                                <h2>47€/h</h2>
                                <h2>37.45€/h</h2>
                                <h2>46.81€/h</h2>
                                <h2>74.90€/h</h2>
                            </section>
                        </article>
                    </section>
                    <section id='pricingMainContentSecondary'>
                        <article className="prose">
                            <section>
                                <p>Matkakuluja ei erikseen peritä, jos kohde on alle 10 kilometrin päässä Pirkkalan keskustasta.<br/><br/>
                                    Yli 10 kilometrin päässä olevista kohteista matkakuluista veloitetaan:<br/><br/>
                                </p>
                            </section>
                            <section>
                                <section>
                                    <h2>Alv 0%</h2>
                                </section>
                                <section>
                                    <h2>0,57€/km</h2>
                                </section>
                            </section>
                        </article>
                    </section>
                    <section id='pricingMainBottom'>
                        <article className='prose'>
                            <p>Muista 60% kotitalousvähennys. Katso lisää kotitalousvähennyksestä Verohallinnon sivuilta painamalla <span><a className='link' href='https://www.vero.fi/henkiloasiakkaat/verokortti-ja-veroilmoitus/vahennykset/kotitalousvahennys/' target='_blank' rel='noreferrer'>tästä</a></span>.<br/><br/></p>
                            <p>HUOM! Alle 24 tunnin sisällä peruutetusta asiakaskäynnistä veloitetaan 43€ (sis. alv).</p>
                            <h2>Katariina<br/>
                                040 56 44 049 / katanpata@gmail.com
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