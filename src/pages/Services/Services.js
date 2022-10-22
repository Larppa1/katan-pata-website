import './Services.css'
import DesktopHeader from '../../components/desktop/DesktopHeader'
import MobileHeader from '../../components/mobile/MobileHeader'
import Footer from '../../components/universal/Footer'

export default function Services() {
    if(window.innerWidth < 750) {
        return(
            <div className="container">
                <MobileHeader/>
                <div className="content">
                    
                </div>
                {/*END OF CONTENT*/}
                <Footer />
            </div>
        )
    }else {
        return(
            <div className="container">
                <DesktopHeader/>
                <div className="content" style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                    <div id='content1' className='shadow-xl' style={{backgroundColor: '#404040', borderRadius: '1em', paddingInline: '2vw', paddingBlock: '2vh', marginBlock: '5vh'}}>
                        <article className='prose'>
                            <h1 style={{textAlign: 'center'}}>Arkiruoanlaitto</h1>
                            <p style={{fontSize: '1.1em'}}>
                            Tekisikö mieli kaalipataa tai vaikka merimiespihvejä?<br/><br/>
                            Jos kiire painaa tai jaksaminen ei riitä ruoanlaittoon niin voitte tilata minut tekemään sen puolestanne.<br/><br/>
                            Voin tulla laittaamaan mieliruokianne esimerkiksi viikon tarpeiksi annoksina pakkaseen tai vain muutaman päivän tarpeiksi. Kerrotte vain mitä haluatte syödä niin minä toteutan.<br/><br/>
                            Voin tehdä teille sitä varten kauppalistan tai toisena vaihtoehtona voimme yhdessä tehdä ruokaostokset tai voin myös käydä noutamassa tilaamanne raaka-aineet.<br/><br/>
                            Erityisruokavalioista minulla on lähes 20 vuoden kokemus.
                            </p>
                        </article>
                    </div>
                    <div id='content2' className='shadow-xl' style={{backgroundColor: '#404040', borderRadius: '1em', paddingInline: '2vw', paddingBlock: '2vh', marginBlock: '5vh'}}>
                        <article className='prose'>
                            <h1 style={{textAlign: 'center'}}>Siivous</h1>
                            <h3 style={{fontStyle: 'italic', marginTop: '-3vh'}}>Olipa siivoustarpeesi iso tai pieni...<br/>
                            räätälöityä siivouspalvelua tarpeittesi ja toiveittesi mukaisesti!</h3>
                            <ul>
                                <li style={{fontWeight: '600'}}>Kertasiivoukset</li>
                                <li style={{fontWeight: '600'}}>Viikkosiivoukset</li>
                                <li style={{fontWeight: '600'}}>Kuukausisiivoukset</li>
                            </ul>
                            <p style={{textDecoration: 'underline', fontSize: '1.2em'}}>Esimerkki viikko- eli ylläpitosiivouksesta:</p>
                            <ul>
                                <li style={{fontWeight: '500', fontSize: '1.1em'}}>lattioiden ja mattojen imurointi sekä mattojen tuuletus (säävarauksella)</li>
                                <li style={{fontWeight: '500', fontSize: '1.1em'}}>lattioiden pyyhkiminen kostealla</li>
                                <li style={{fontWeight: '500', fontSize: '1.1em'}}>pölyjen pyyhkiminen ulottumiskorkeudelta</li>
                                <li style={{fontWeight: '500', fontSize: '1.1em'}}>keittiön tasopintojen kosteapyyhintä ulottumiskorkeudelta</li>
                                <li style={{fontWeight: '500', fontSize: '1.1em'}}>keittiökoneiden (kylmälaitteet, uuni, liesitaso, mikro, asianpesukone) ulkopintojen kosteapyyhintä</li>
                                <li style={{fontWeight: '500', fontSize: '1.1em'}}>peilien pyyhkiminen</li>
                                <li style={{fontWeight: '500', fontSize: '1.1em'}}>wc-altaan ja -istuimen puhdistus</li>
                            </ul>
                            <p style={{fontSize: '1.3em'}}>Siivoustehtävät sunnitellaan aina asiakkaan toiveitten ja tarpeitten mukaisesti.</p>
                        </article>
                    </div>
                    <div id='content3' className='shadow-xl' style={{backgroundColor: '#404040', borderRadius: '1em', paddingInline: '2vw', paddingBlock: '2vh', marginBlock: '5vh'}}>
                        <article className='prose'>
                            <h1>Ruoanlaitto kutsuille</h1>
                            <h3  style={{fontStyle: 'italic', marginTop: '-3vh'}}>Onnistuneista juhlista nauttivat sekä vieraat että isäntäväki!</h3>
                            <p style={{fontSize: '1.1em'}}>
                            Joskus juhlien järjestäminen kotona voi tuntua stressaavalta ja isäntäväelle ei jää aikaa seurustella vieraiden kanssa. Huolehdin pienimuotoisten juhlien järjestelyt, tarjoilun ja ruoanlaiton toiveitte mukaisesti.<br/><br/>
                            Pakettiin voi esimerkiksi kuulua siivous, menu-suunnittelu, kattaminen ja koristelu, ruoanlaitto ja tarjoilu. Näin voi isäntäväki vapautua nauttimaan kokonaisvaltaisesti illasta.<br/><br/>
                            Ota yhteyttä niin suunnitellaan onnistuneet juhlat!
                            </p>
                        </article>
                    </div>
                    <div id='content4' className='shadow-xl' style={{backgroundColor: '#404040', borderRadius: '1em', paddingInline: '2vw', paddingBlock: '2vh', marginBlock: '5vh'}}>
                        <article className='prose'>
                            <h1>Arvonlisäverottomat palvelut</h1>
                            <p style={{fontSize: '1.1em'}}>
                            Olen Pirkkalan kunnan yksityisten palvelutuottajien rekisterissä, joka mahdollistaa minun tarjota arvonlisäverotonta kotipalvelua Pirkkalan ja Vesilahden alueilla. Oikeus arvonlisäverottomaan palveluun määräytyy siten, jos asiakkaan toimintakyky on alentunut esimerkiksi ikääntymisen, vamman tai onnettomuuden seurauksena. Kysy minulta lisää mahdollisesta oikeudestasi arvonlisäverottomaan palveluun.<br/><br/>
                            Oli sitten kysymys ruoanlaitosta, siivouksesta tai asiointiavusta tuntihinta on aina kiinteä.<br/><br/>
                            Hinta 34,68€ /tunti alv. 0% (kotitalousvähennyksen jälkeen 20,81€/tunti).
                            </p>
                        </article>
                    </div>
                    <div id='content5' className='shadow-xl' style={{backgroundColor: '#404040', borderRadius: '1em', paddingInline: '2vw', paddingBlock: '2vh', marginBlock: '5vh'}}>
                        <article className='prose'>
                            <h1>Asiointi- ja kuljetuspalvelut</h1>
                            <p style={{fontSize: '1.1em'}}>
                            Voin olla avuksi kauppa- ja apteekkireissuilla. Voin toimia myös saattajana esimerkiksi lääkärikäynneillä.
                            </p>
                        </article>
                    </div>
                </div>
                {/*END OF CONTENT*/}
                <Footer />
            </div>
        )
    }
    
}