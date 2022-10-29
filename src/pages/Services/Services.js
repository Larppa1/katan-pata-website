import './Services.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function Services() {
    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <header>
                    <Navbar/>
                </header>
                <main id='servicesMain'>
                    <article className='prose'>
                        <section className='card bg-neutral shadow-xl'>
                            <h2>Arkiruoanlaitto</h2>
                            <p>Tekisikö mieli kaalipataa tai vaikka merimiespihvejä?</p>
                            <p>
                                Jos kiire painaa tai jaksaminen ei riitä ruoanlaittoon niin voitte tilata minut tekemään sen puolestanne.<br/><br/>
                                Voin tulla laittaamaan mieliruokianne esimerkiksi viikon tarpeiksi annoksina pakkaseen tai vain muutaman päivän tarpeiksi. Kerrotte vain mitä haluatte syödä niin minä toteutan.<br/><br/>
                                Voin tehdä teille sitä varten kauppalistan tai toisena vaihtoehtona voimme yhdessä tehdä ruokaostokset tai voin myös käydä noutamassa tilaamanne raaka-aineet.<br/><br/>
                                Erityisruokavalioista minulla on lähes 20 vuoden kokemus.
                            </p>
                        </section>
                        <section className='card bg-neutral shadow-xl'>
                            <h2>Siivous</h2>
                            <p>Olipa siivoustarpeesi iso tai pieni...<br/>
                                räätälöityä siivouspalvelua tarpeittesi ja toiveittesi mukaisesti!</p>
                            <ul>
                                <li>Kertasiivoukset</li>
                                <li>Viikkosiivoukset</li>
                                <li>Kuukausisiivoukset</li>
                            </ul>
                            <p style={{textDecoration: 'underline'}}>Esimerkki viikko- eli ylläpitosiivouksesta:</p>
                            <ul>
                                <li>Lattioiden ja mattojen imurointi sekä mattojen tuuletus (säävarauksella)</li>
                                <li>Lattioiden pyyhkiminen kostealla</li>
                                <li>Pölyjen pyyhkiminen ulottumiskorkeudelta</li>
                                <li>Keittiön tasopintojen kosteapyyhintä ulottumiskorkeudelta</li>
                                <li>Keittiökoneiden (kylmälaitteet, uuni, liesitaso, mikro, asianpesukone) ulkopintojen kosteapyyhintä</li>
                                <li>Peilien pyyhkiminen</li>
                                <li>Wc-altaan ja -istuimen puhdistus</li>
                            </ul>
                            <p>Siivoustehtävät sunnitellaan aina asiakkaan toiveitten ja tarpeitten mukaisesti.</p>
                        </section>
                        <section className='card bg-neutral shadow-xl'>
                            <h2>Ruoanlaitto kutsuille</h2>
                            <p>Onnistuneista juhlista nauttivat sekä vieraat että isäntäväki!</p>
                            <p>
                                Joskus juhlien järjestäminen kotona voi tuntua stressaavalta ja isäntäväelle ei jää aikaa seurustella vieraiden kanssa. Huolehdin pienimuotoisten juhlien järjestelyt, tarjoilun ja ruoanlaiton toiveitte mukaisesti.<br/><br/>
                                Pakettiin voi esimerkiksi kuulua siivous, menu-suunnittelu, kattaminen ja koristelu, ruoanlaitto ja tarjoilu. Näin voi isäntäväki vapautua nauttimaan kokonaisvaltaisesti illasta.<br/><br/>
                                Ota yhteyttä niin suunnitellaan onnistuneet juhlat!
                            </p>
                        </section>
                        <section className='card bg-neutral shadow-xl'>
                            <h2>Arvonlisäverottomat palvelut</h2>
                            <p>
                                Olen Pirkkalan kunnan yksityisten palvelutuottajien rekisterissä, joka mahdollistaa minun tarjota arvonlisäverotonta kotipalvelua Pirkkalan ja Vesilahden alueilla. Oikeus arvonlisäverottomaan palveluun määräytyy siten, jos asiakkaan toimintakyky on alentunut esimerkiksi ikääntymisen, vamman tai onnettomuuden seurauksena. Kysy minulta lisää mahdollisesta oikeudestasi arvonlisäverottomaan palveluun.<br/><br/>
                                Oli sitten kysymys ruoanlaitosta, siivouksesta tai asiointiavusta tuntihinta on aina kiinteä.<br/><br/>
                                Hinta 34,68€/tunti alv. 0% (kotitalousvähennyksen jälkeen 20,81€/tunti).
                            </p>
                        </section>
                        <section className='card bg-neutral shadow-xl'>
                            <h2>Asiointi- ja kuljetuspalvelut</h2>
                            <p>
                                Voin olla avuksi kauppa- ja apteekkireissuilla. Voin toimia myös saattajana esimerkiksi lääkärikäynneillä.
                            </p>
                        </section>
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
                    <Navbar/>
                </header>
                <main id='servicesMain'>
                    <article className='prose'>
                        <section className='card bg-neutral shadow-xl'>
                            <h1>Arkiruoanlaitto</h1>
                            <p>Tekisikö mieli kaalipataa tai vaikka merimiespihvejä?</p>
                            <p>
                                Jos kiire painaa tai jaksaminen ei riitä ruoanlaittoon niin voitte tilata minut tekemään sen puolestanne.<br/><br/>
                                Voin tulla laittaamaan mieliruokianne esimerkiksi viikon tarpeiksi annoksina pakkaseen tai vain muutaman päivän tarpeiksi. Kerrotte vain mitä haluatte syödä niin minä toteutan.<br/><br/>
                                Voin tehdä teille sitä varten kauppalistan tai toisena vaihtoehtona voimme yhdessä tehdä ruokaostokset tai voin myös käydä noutamassa tilaamanne raaka-aineet.<br/><br/>
                                Erityisruokavalioista minulla on lähes 20 vuoden kokemus.
                            </p>
                        </section>
                        <section className='card bg-neutral shadow-xl'>
                            <h1>Siivous</h1>
                            <p>Olipa siivoustarpeesi iso tai pieni...<br/>
                                räätälöityä siivouspalvelua tarpeittesi ja toiveittesi mukaisesti!</p>
                            <ul>
                                <li>Kertasiivoukset</li>
                                <li>Viikkosiivoukset</li>
                                <li>Kuukausisiivoukset</li>
                            </ul>
                            <p style={{textDecoration: 'underline'}}>Esimerkki viikko- eli ylläpitosiivouksesta:</p>
                            <ul>
                                <li>Lattioiden ja mattojen imurointi sekä mattojen tuuletus (säävarauksella)</li>
                                <li>Lattioiden pyyhkiminen kostealla</li>
                                <li>Pölyjen pyyhkiminen ulottumiskorkeudelta</li>
                                <li>Keittiön tasopintojen kosteapyyhintä ulottumiskorkeudelta</li>
                                <li>Keittiökoneiden (kylmälaitteet, uuni, liesitaso, mikro, asianpesukone) ulkopintojen kosteapyyhintä</li>
                                <li>Peilien pyyhkiminen</li>
                                <li>Wc-altaan ja -istuimen puhdistus</li>
                            </ul>
                            <p>Siivoustehtävät sunnitellaan aina asiakkaan toiveitten ja tarpeitten mukaisesti.</p>
                        </section>
                        <section className='card bg-neutral shadow-xl'>
                            <h1>Ruoanlaitto kutsuille</h1>
                            <p>Onnistuneista juhlista nauttivat sekä vieraat että isäntäväki!</p>
                            <p>
                                Joskus juhlien järjestäminen kotona voi tuntua stressaavalta ja isäntäväelle ei jää aikaa seurustella vieraiden kanssa. Huolehdin pienimuotoisten juhlien järjestelyt, tarjoilun ja ruoanlaiton toiveitte mukaisesti.<br/><br/>
                                Pakettiin voi esimerkiksi kuulua siivous, menu-suunnittelu, kattaminen ja koristelu, ruoanlaitto ja tarjoilu. Näin voi isäntäväki vapautua nauttimaan kokonaisvaltaisesti illasta.<br/><br/>
                                Ota yhteyttä niin suunnitellaan onnistuneet juhlat!
                            </p>
                        </section>
                        <section className='card bg-neutral shadow-xl'>
                            <h1>Arvonlisäverottomat palvelut</h1>
                            <p>
                                Olen Pirkkalan kunnan yksityisten palvelutuottajien rekisterissä, joka mahdollistaa minun tarjota arvonlisäverotonta kotipalvelua Pirkkalan ja Vesilahden alueilla. Oikeus arvonlisäverottomaan palveluun määräytyy siten, jos asiakkaan toimintakyky on alentunut esimerkiksi ikääntymisen, vamman tai onnettomuuden seurauksena. Kysy minulta lisää mahdollisesta oikeudestasi arvonlisäverottomaan palveluun.<br/><br/>
                                Oli sitten kysymys ruoanlaitosta, siivouksesta tai asiointiavusta tuntihinta on aina kiinteä.<br/><br/>
                                Hinta 34,68€/tunti alv. 0% (kotitalousvähennyksen jälkeen 20,81€/tunti).
                            </p>
                        </section>
                        <section className='card bg-neutral shadow-xl'>
                            <h1>Asiointi- ja kuljetuspalvelut</h1>
                            <p>
                                Voin olla avuksi kauppa- ja apteekkireissuilla. Voin toimia myös saattajana esimerkiksi lääkärikäynneillä.
                            </p>
                        </section>
                    </article>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}