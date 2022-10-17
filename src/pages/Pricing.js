import React from 'react'
import './styles.css'
import DesktopHeader from '../components/desktop/DesktopHeader'
import MobileHeader from '../components/mobile/MobileHeader'
import Footer from '../components/universal/Footer'

export default function Pricing() {
    if(window.innerWidth < 750) {
        return(
            <div className="container">
                <MobileHeader />
                <div className="content">
                    <div className="pricingContent">
                        <article className="prose pricingTitleContent">
                            <h1 className='titleText'>Hinnasto</h1>
                            <h3 className='secondaryTitleText'>Kaikkien palvelujen hinnat ovat kiinteitä tuntihintoja</h3>
                        </article>
                        <article className="prose pricingInfoContent">
                            <div className='pricingInfoContentLeft'>
                                <p className='pricingText'>Alv 24%</p>
                                <p className='pricingText'>Alv 0%</p>
                                <p className='pricingText'>La klo 07-18</p>
                                <p className='pricingText'>Su klo 11-17</p>
                            </div>
                            <div className='pricingInfoContentRight'>
                                <p className='pricingText'>43€/h</p>
                                <p className='pricingText'>34.68€/h</p>
                                <p className='pricingText'>43.35€/h</p>
                                <p className='pricingText'>69.36€/h</p>
                            </div>
                            
                        </article>
                        <article className="prose pricingMoreInfoContent">
                            <p className='pricingSecondaryText'>Matkakuluja ei erikseen peritä, jos kohde on alle 10 kilometrin päässä Pirkkalan keskustasta.<br/><br/>
                            Yli 10 kilometrin päässä olevista kohteista matkakuluista veloitetaan:<br/><br/>
                            </p>
                            <div className='pricingSecondaryPrices'>
                                <p className='pricingText'>Alv 24%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0,52€/km<br/><br/>
                                Alv 0% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0,42€/km<br/><br/>
                                </p>
                            </div>
                            <p className='pricingSecondaryText'>Muista 40% kotitalousvähennys. Katso lisää kotitalousvähennyksestä Verohallinnon sivuilta painamalla <span><a className='link' href='https://www.vero.fi/henkiloasiakkaat/verokortti-ja-veroilmoitus/tulot-ja-vahennykset/kotitalousvahennys/' target='_blank' rel='noreferrer'>tästä</a></span>.<br/><br/></p>
                            <div className='pricingSecondaryPrices'>
                                <p className='pricingText'>HUOM! Alle 24 tunnin sisällä peruutetusta asiakaskäynnistä veloitetaan 43€ (sis.alv).</p>
                            </div>
                            <h2 className='secondaryText'>Katariina / 040 56 44 049 TAI katanpata@gmail.com</h2>
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