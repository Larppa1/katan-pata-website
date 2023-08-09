import './PrivacyPolicy.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function PrivacyPolicy() {
    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <header>
                    <Navbar />
                </header>
                <main id='privacyPolicyMain'>
                    <article className='prose'>
                        <h2>Henkilötietolain (523/99) 10 § mukainen rekisteriseloste</h2>
                        <h3>1. Rekisterinpitäjä</h3>
                        <p>Katan Pata Oy<br/>
                        Y-tunnus: 3322569-5<br/>
                        Miekkatie 6<br/>
                        33960 Pirkkala<br/>
                        Puh. 040 56 44 049
                        </p>
                        <h3>2. Yhteyshenkilö rekisteriä koskevissa asioissa</h3>
                        <p>Katariina Juva-Höylänen<br/>
                        Korteniityntie 122<br/>
                        33980 Pirkkala<br/>
                        katanpata@gmail.com
                        </p>
                        <h3>3. Rekisterin nimi</h3>
                        <p>Katan Pata</p>
                        <h3>4. Henkilötietojen käsittelyn tarkoitus</h3>
                        <p>Rekisterin tarkoituksena on rekisterinpitäjän ja asiakkaan välisen asiakassuhteen hoitaminen, sekä markkinointi ja viestintä.</p>
                        <h3>5. Rekisterin tietosisältö</h3>
                        <p>Rekisteri saattaa sisältää seuraavia tietoja asiakkaasta:<br/>
                        - Nimi<br/>
                        - Puhelinnumero<br/>
                        - Osoite<br/>
                        - Sähköpostiosoite<br/>
                        - Organisaation nimi ja y-tunnus<br/>
                        - Yhteysloki
                        </p>
                        <h3>6. Sääntöjen mukaiset tietolähteet</h3>
                        <p>Rekisteri koostetaan rekisterinpitäjän asiakastietojärjestelmästä sekä sivuston kävijäseurantatyökalusta, yleisesti saatavilla olevista internetlähteistä ja muista julkisista sekä maksuttomista että maksullisista lähteistä.</p>
                        <h3>7. Tietojen säännönmukaiset luovutukset</h3>
                        <p>Rekisterinpitäjä ei luovuta tietoja ulkopuolisille, paitsi Suomen viranomaistoimien niin edellyttäessä.</p>
                        <h3>8. Tietojen siirto EU:n tai ETA:n ulkopuolelle</h3>
                        <p>Henkilötietoja ei pääsääntöisesti siirretä Euroopan unionin tai Euroopan talousalueen ulkopuolelle.</p>
                        <h3>9. Rekisterin suojauksen periaatteet</h3>
                        <p>Henkilötiedot säilytetään luottamuksellisina. Rekisterinpitäjän ja sen mahdollisten tietotekniikkakumppaneiden tietoverkko ja laitteisto, jolla rekisteri sijaitsee, on suojattu palomuurilla ja muilla tarvittavilla teknisillä toimenpiteillä.</p>
                        <h3>10. Evästeet</h3>
                        <p>Rekisterinpitäjän sivuilla saatetaan käyttää evästeitä käyttökokemuksen kehittämiseksi. Eväste on tekstitiedosto, joka verkkosivulla käydessä tallentuu käyttäjän tietokoneelle. Se sisältää tietoja ja sitä käytetään mm. markkinointiin ja sivuston kehittämiseen. Evästeiden avulla kerätään tietoa sivujen käytöstä. Käyttäjän henkilöllisyys ei käy ilmi evästeiden avulla. Käyttäjä voi poistaa evästeet käytöstä selaimen asetuksista. Rekisterinpitäjän ei takaa, että sivusto toimii oikein evästeiden poistamisen jälkeen.</p>
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
                    <Navbar />
                </header>
                <main id='privacyPolicyMain'>
                    <article className='prose'>
                        <h1>Henkilötietolain (523/99) 10 § mukainen rekisteriseloste</h1>
                        <h2>1. Rekisterinpitäjä</h2>
                        <p>Katan Pata<br/>
                        Y-tunnus: 1527508-2<br/>
                        Miekkatie 6<br/>
                        33960 Pirkkala<br/>
                        Puh. 040 56 44 049
                        </p>
                        <h2>2. Yhteyshenkilö rekisteriä koskevissa asioissa</h2>
                        <p>Katariina Juva<br/>
                        Korteniityntie 122<br/>
                        33980 Pirkkala<br/>
                        katanpata@gmail.com
                        </p>
                        <h2>3. Rekisterin nimi</h2>
                        <p>Katan Pata</p>
                        <h2>4. Henkilötietojen käsittelyn tarkoitus</h2>
                        <p>Rekisterin tarkoituksena on rekisterinpitäjän ja asiakkaan välisen asiakassuhteen hoitaminen, sekä markkinointi ja viestintä.</p>
                        <h2>5. Rekisterin tietosisältö</h2>
                        <p>Rekisteri saattaa sisältää seuraavia tietoja asiakkaasta:<br/>
                        - Nimi<br/>
                        - Puhelinnumero<br/>
                        - Osoite<br/>
                        - Sähköpostiosoite<br/>
                        - Organisaation nimi ja y-tunnus<br/>
                        - Yhteysloki
                        </p>
                        <h2>6. Sääntöjen mukaiset tietolähteet</h2>
                        <p>Rekisteri koostetaan rekisterinpitäjän asiakastietojärjestelmästä sekä sivuston kävijäseurantatyökalusta, yleisesti saatavilla olevista internetlähteistä ja muista julkisista sekä maksuttomista että maksullisista lähteistä.</p>
                        <h2>7. Tietojen säännönmukaiset luovutukset</h2>
                        <p>Rekisterinpitäjä ei luovuta tietoja ulkopuolisille, paitsi Suomen viranomaistoimien niin edellyttäessä.</p>
                        <h2>8. Tietojen siirto EU:n tai ETA:n ulkopuolelle</h2>
                        <p>Henkilötietoja ei pääsääntöisesti siirretä Euroopan unionin tai Euroopan talousalueen ulkopuolelle.</p>
                        <h2>9. Rekisterin suojauksen periaatteet</h2>
                        <p>Henkilötiedot säilytetään luottamuksellisina. Rekisterinpitäjän ja sen mahdollisten tietotekniikkakumppaneiden tietoverkko ja laitteisto, jolla rekisteri sijaitsee, on suojattu palomuurilla ja muilla tarvittavilla teknisillä toimenpiteillä.</p>
                        <h2>10. Evästeet</h2>
                        <p>Rekisterinpitäjän sivuilla saatetaan käyttää evästeitä käyttökokemuksen kehittämiseksi. Eväste on tekstitiedosto, joka verkkosivulla käydessä tallentuu käyttäjän tietokoneelle. Se sisältää tietoja ja sitä käytetään mm. markkinointiin ja sivuston kehittämiseen. Evästeiden avulla kerätään tietoa sivujen käytöstä. Käyttäjän henkilöllisyys ei käy ilmi evästeiden avulla. Käyttäjä voi poistaa evästeet käytöstä selaimen asetuksista. Rekisterinpitäjän ei takaa, että sivusto toimii oikein evästeiden poistamisen jälkeen.</p>
                    </article>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}