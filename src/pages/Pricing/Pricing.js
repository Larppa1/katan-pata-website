import React from 'react'
import './Pricing.css'
import DesktopHeader from '../../components/desktop/DesktopHeader'
import MobileHeader from '../../components/mobile/MobileHeader'
import Footer from '../../components/universal/Footer'

export default function Pricing() {
    if(window.innerWidth < 750) {
        return(
            <div className="container">
                <header>
                    <MobileHeader />
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
                                <h3>Alv 24%</h3>
                                <h3>Alv 0%</h3>
                                <h3>La klo 07-18</h3>
                                <h3>Su klo 11-17</h3>
                            </section>
                            <section>
                                <h3>43€/h</h3>
                                <h3>34.68€/h</h3>
                                <h3>43.35€/h</h3>
                                <h3>69.36€/h</h3>
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
                                    <h3>Alv 24%</h3>
                                    <h3>Alv 0%</h3>
                                </section>
                                <section>
                                    <h3>0,52€/km</h3>
                                    <h3>0,42€/km</h3>
                                </section>
                            </section>
                        </article>
                    </section>
                    <section id='pricingMainBottom'>
                        <article className='prose'>
                            <p>Muista 40% kotitalousvähennys. Katso lisää kotitalousvähennyksestä Verohallinnon sivuilta painamalla <span><a className='link' href='https://www.vero.fi/henkiloasiakkaat/verokortti-ja-veroilmoitus/tulot-ja-vahennykset/kotitalousvahennys/' target='_blank' rel='noreferrer'>tästä</a></span>.<br/><br/></p>
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
                <DesktopHeader />
                <div className="content">
                    <div className="pricingContent">
                        <article class="prose" className='pricingTitleContent'>
                            <h1 className='titleText'>Hinnasto</h1>
                            <h3 className='secondaryTitleText'>Kaikkien palvelujen hinnat ovat kiinteitä tuntihintoja</h3>
                        </article>
                        <article class="prose" className="pricingInfoContent">
                            <p className='pricingText'>Alv 24% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;43€/h<br/>
                            Alv 0% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;34.68€/h (kotitalousvähennyksen jälkeen 20.81€/h)<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;43.35€/h | lauantaisin klo 07-18<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;69.36€/h | sunnuntaisin & pyhinä klo 11-17
                            </p>
                        </article>
                        <article class="prose" className='pricingMoreInfoContent'>
                            <p className='pricingSecondaryText'>Matkakuluja ei erikseen peritä, jos kohde on alle 10 kilometrin päässä Pirkkalan keskustasta.<br/><br/>
                            Yli 10 kilometrin päässä olevista kohteista matkakuluista veloitetaan:<br/><br/>
                            </p>
                            <p className='pricingText'>Alv 24%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0,52€/km<br/><br/>
                            Alv 0% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0,42€/km<br/><br/>
                            </p>
                            <p className='pricingSecondaryText'>Muista 40% kotitalousvähennys. Katso lisää kotitalousvähennyksestä Verohallinnon sivuilta painamalla <span><a className='link' href='https://www.vero.fi/henkiloasiakkaat/verokortti-ja-veroilmoitus/tulot-ja-vahennykset/kotitalousvahennys/' target='_blank' rel='noreferrer'>tästä</a></span>.<br/><br/></p>
                            <p className='pricingTextFooter'>HUOM! Alle 24 tunnin sisällä peruutetusta asiakaskäynnistä veloitetaan 43€ (sis.alv).</p>
                            <h2 className='secondaryText'>Katariina / 040 56 44 049 TAI katanpata@gmail.com</h2>
                        </article>
                    </div>
                </div>
                {/*END OF CONTENT*/}
                <Footer />
            </div>
        )
    }
}