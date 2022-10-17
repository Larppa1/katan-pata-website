import React from 'react'
import './styles.css'
import DesktopHeader from '../components/desktop/DesktopHeader'
import MobileHeader from '../components/mobile/MobileHeader'
import Footer from '../components/universal/Footer'

export default function Landing() {
    if(window.innerWidth < 750) {
        return(
            <div className="container">
                <MobileHeader />
                <div className="content">
                        <article class="prose" className='mainContent'>
                            <h1 className='titleText'>Mitä kaikkea Kata tekee?</h1>
                            <p className='mainText'>Kata laittaa ruokaa, siivoaa, pesee ikkunat, vaihtaa lampun ja vaikka naputtelee kiinni repsottavan listan. Myös ruokaostokset ja muut asionnit sujuvat mukavasti yhdessä Katan kanssa.<br/><br/>
                            Ruokia voidaan valmistaa valmiina annoksina vain muutaman päivän tai esimerkiksi viikon tarpeiksi pakastimeen, tai sitten voitte tilata minut valmistamaan ruokia vaikkapa illalliskutsujanne varten. Ruoat valmistetaan kotonanne mieltymyksienne mukaisesti myös erityisruokavaliot huomioon ottaen.<br/><br/>
                            Olen Pirkkalan kunnan yksityisten palvelutuottajien rekisterissä, mikä oikeuttaa minut tarjoamaan palveluja ilman arvonlisäveroa mm. yli 80-vuotiaille.<br/><br/>
                            Kysy minulta lisää mahdollisesta oikeudestasi arvonlisäverottomaan palveluun.<br/><br/>
                            Ota yhteyttä niin suunnitellaan, kuinka voin olla avuksi!<br/>
                            Suunnittelukäynti on maksuton eikä sido sinua mihinkään.
                            </p>
                            <h2 className='secondaryText'>Katariina / 040 56 44 049 TAI katanpata@gmail.com</h2>
                        </article>
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
                        <article class="prose" className='mainContent'>
                            <h1 className='titleText'>Mitä kaikkea Kata tekee?</h1>
                            <p className='mainText'>Kata laittaa ruokaa, siivoaa, pesee ikkunat, vaihtaa lampun ja vaikka naputtelee kiinni repsottavan listan. Myös ruokaostokset ja muut asionnit sujuvat mukavasti yhdessä Katan kanssa.<br/><br/>
                            Ruokia voidaan valmistaa valmiina annoksina vain muutaman päivän tai esimerkiksi viikon tarpeiksi pakastimeen, tai sitten voitte tilata minut valmistamaan ruokia vaikkapa illalliskutsujanne varten. Ruoat valmistetaan kotonanne mieltymyksienne mukaisesti myös erityisruokavaliot huomioon ottaen.<br/><br/>
                            Olen Pirkkalan kunnan yksityisten palvelutuottajien rekisterissä, mikä oikeuttaa minut tarjoamaan palveluja ilman arvonlisäveroa mm. yli 80-vuotiaille.<br/><br/>
                            Kysy minulta lisää mahdollisesta oikeudestasi arvonlisäverottomaan palveluun.<br/><br/>
                            Ota yhteyttä niin suunnitellaan, kuinka voin olla avuksi!<br/>
                            Suunnittelukäynti on maksuton eikä sido sinua mihinkään.
                            </p>
                            <h2 className='secondaryText'>Katariina / 040 56 44 049 TAI katanpata@gmail.com</h2>
                        </article>
                </div>
                {/*END OF CONTENT*/}
                <Footer />
            </div>
        )
    }
    
}