import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Landing.css'
import DesktopHeader from '../../components/desktop/DesktopHeader'
import MobileHeader from '../../components/mobile/MobileHeader'
import Footer from '../../components/universal/Footer'

export default function Landing() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_hh87ikt', 'template_pquqfst', form.current, 'n5MdbvlDxAKYVvX49')
            .then((result) => {
                console.log(result.text)
                form.current.submit()
            }, (error) => {
                console.log(error.text)
            })
    }

    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <section>
                    <div className="dropdown dropdown-top dropdown-end">
                        <label tabIndex={0} className="btn bg-base-300 shadow-xl">Palaute</label>
                        {/* <div className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-80">
                            <article id='feedbackContainer' className='prose'>
                                <h2>Anna palautetta!</h2>
                                <h4>Haluamme kuulla, miten olemme onnistuneet palveluiden tarjonnassa. Kaikki palautteet ovat nimettömiä, eikä niitä voida yhdistää kehenkään henkilöön.</h4>
                                <form ref={form} onSubmit={sendEmail}>
                                    <textarea id='message' className="textarea textarea-bordered" placeholder="Viesti" name="message"></textarea>
                                    <input type="submit" className="btn">Lähetä</input>
                                </form>
                            </article>
                        </div> */}
                    </div>
                </section>
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
                <section>
                    <div className="dropdown dropdown-top dropdown-end">
                        <label tabIndex={0} className="btn bg-base-300 shadow-xl">Palaute</label>
                        <div className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-96">
                            <article id='feedbackContainer' className='prose'>
                                <h2>Anna palautetta!</h2>
                                <h4>Haluamme kuulla, miten olemme onnistuneet palveluiden tarjonnassa. Kaikki palautteet ovat nimettömiä, eikä niitä voida yhdistää kehenkään henkilöön.</h4>
                                <form ref={form} onSubmit={sendEmail}>
                                    <textarea id='message' className="textarea textarea-bordered" placeholder="Viesti" name="message"></textarea>
                                    <button className="btn">Lähetä</button>
                                </form>
                            </article>
                        </div>
                    </div>
                </section>
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