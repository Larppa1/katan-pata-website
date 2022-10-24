import './Landing.css'
import DesktopHeader from '../../components/desktop/DesktopHeader'
import MobileHeader from '../../components/mobile/MobileHeader'
import Footer from '../../components/universal/Footer'

export default function Landing() {
    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <header>
                    <MobileHeader />
                </header>
                <main id='landingMain'>
                    <article className="prose">
                            <h2>Mitä kaikkea Kata tekee?</h2>
                            <p>Kata laittaa ruokaa, siivoaa, pesee ikkunat, vaihtaa lampun ja vaikka naputtelee kiinni repsottavan listan. Myös ruokaostokset ja muut asionnit sujuvat mukavasti yhdessä Katan kanssa.<br/><br/>
                                Ruokia voidaan valmistaa valmiina annoksina vain muutaman päivän tai esimerkiksi viikon tarpeiksi pakastimeen, tai sitten voitte tilata minut valmistamaan ruokia vaikkapa illalliskutsujanne varten. Ruoat valmistetaan kotonanne mieltymyksienne mukaisesti myös erityisruokavaliot huomioon ottaen.<br/><br/>
                                Olen Pirkkalan kunnan yksityisten palvelutuottajien rekisterissä, mikä oikeuttaa minut tarjoamaan palveluja ilman arvonlisäveroa mm. yli 80-vuotiaille.<br/><br/>
                                Kysy minulta lisää mahdollisesta oikeudestasi arvonlisäverottomaan palveluun.<br/><br/>
                                Ota yhteyttä niin suunnitellaan, kuinka voin olla avuksi!<br/>
                                Suunnittelukäynti on maksuton eikä sido sinua mihinkään.
                            </p>
                            <h2>Katariina<br/>
                                040 56 44 049<br/>
                                TAI<br/>
                                katanpata@gmail.com
                            </h2>
                        </article>
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
                <main id='landingMain'>
                    <article className="prose">
                            <h1>Mitä kaikkea Kata tekee?</h1>
                            <p>Kata laittaa ruokaa, siivoaa, pesee ikkunat, vaihtaa lampun ja vaikka naputtelee kiinni repsottavan listan. Myös ruokaostokset ja muut asionnit sujuvat mukavasti yhdessä Katan kanssa.<br/><br/>
                                Ruokia voidaan valmistaa valmiina annoksina vain muutaman päivän tai esimerkiksi viikon tarpeiksi pakastimeen, tai sitten voitte tilata minut valmistamaan ruokia vaikkapa illalliskutsujanne varten. Ruoat valmistetaan kotonanne mieltymyksienne mukaisesti myös erityisruokavaliot huomioon ottaen.<br/><br/>
                                Olen Pirkkalan kunnan yksityisten palvelutuottajien rekisterissä, mikä oikeuttaa minut tarjoamaan palveluja ilman arvonlisäveroa mm. yli 80-vuotiaille.<br/><br/>
                                Kysy minulta lisää mahdollisesta oikeudestasi arvonlisäverottomaan palveluun.<br/><br/>
                                Ota yhteyttä niin suunnitellaan, kuinka voin olla avuksi!<br/>
                                Suunnittelukäynti on maksuton eikä sido sinua mihinkään.
                            </p>
                            <h2>Katariina<br/>
                                040 56 44 049 / katanpata@gmail.com
                            </h2>
                        </article>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
    
}