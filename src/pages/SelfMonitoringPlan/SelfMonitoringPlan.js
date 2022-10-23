import './SelfMonitoringPlan.css'
import DesktopHeader from '../../components/desktop/DesktopHeader'
import MobileHeader from '../../components/mobile/MobileHeader'
import Footer from '../../components/universal/Footer'

export default function SelfMonitoringPlan() {
    if(window.innerWidth < 768) {
        return(
            <div className="container">
                <header>
                    <MobileHeader />
                </header>
                <main id='selfMonitoringPlanMain'>
                    <article className='prose'>
                        <h2>Kotityöpalveluyrityksen omavalvontasuunnitelma</h2>
                        <h4>Asiakaskoteihin tuotettavat tukipalvelut</h4>
                        <h3>1. Palvelujen tuottajaa koskevat tiedot</h3>
                        <h3>2. Yrityksen toimintaperiaatteet</h3>
                        <p><u>Toiminta-ajatus</u><br/>
                            Katan Pata tuottaa kotipalvelujen tukipalveluja, jonka avulla ikäihminen voi viettää kotonaan täysipainoista ja hyvää elämää. Katan Padassa työskentelee yrittäjä itse. Katan Pata tuottaa palveluja ikäihmisille ja muille palvelua tarvitseville. Katan Padan palveluihin kuuluu ruoanlaitto asiakkaan kotona, joita voidaan valmistaa vain muutaman päivän tarpeiksi tai esimerkiksi vaikka viikon tarpeiksi pakastimeen valmiina annoksina. Ruoat valmistetaan asiakkaan mieltymyksien mukaisesti erityisruokavaliot huomioon ottaen. Katan Pata myös siivoaa, pesee ikkunoita, leikkaa nurmikon, luo lumet, tarjoaa asiointipalvelua ja tekee tarvittaessa myös muita kodin askareita.<br/><br/>
                            <u>Arvot ja toimintaperiaatteet</u><br/>
                            Yrityksemme koko toiminta lähtee asiakkaan tarpeesta; toiminnan perustana on asiakkaan ja asiakasympäristön kunnioittaminen. Kuuntelemalla asiakasta ja myös omaisia tuotamme ihmisläheisiä ja ihmislähtöisiä palveluja vastuullisesti, luottamuksellisesti, tarvelähtöisesti, ystävällisesti ja suunnitelmallisesti. Työntekijä osoittaa kunnioitusta jokaista kohtaan, puhuttelee ja kohtelee arvokkaana yksilönä ja kunnioittaa hänen yksityisyyttään. Huomioi asiakkaan henkilökohtaiset elämänarvot, elämänkatsomuksen ja on luotettava. Työntekijä kunnioittaa asiakkaan oikeutta itsenäiseen elämään ja päätöksentekoon omissa asioissaan. Työntekijä puhuttelee asiakasta hänen toivomallaan tavalla. Työntekijä on tietoinen asiakkaiden oikeuksista ja edistää heidän hyvinvointiaan. Tiedostaa ettei ihmistä saa syrjiä vaan kaikkia tulee kohdella tasavertaisesti hänen iästään, asemastaan, vakaumuksestaan, sukupuolestaan riippumatta. Työntekijä huolehtii oman ammattitaitonsa ylläpitämisestä ja haluaa kehittää itseään ja omaa työtään. Vastaa omasta työstään ensisijaisesti asiakkaalle tai hänen edustajalleen. Vastuullisuudessa keskeisenä on myös salassapitovelvollisuus.
                        </p>
                        <h3>3. Omavalvonnan organisointi, vastuut ja vastuuhenkilöt</h3>
                        <p>Omavalvonnasta vastaavan yrityksen johdon edustaja ja tehtävät:<br/>
                            Yrittäjä vastaa organisoinnista ja toteutumisesta<br/><br/>
                            Omavalvonnasta vastaavan henkilön yhteystiedot ja tehtävät (jos eri henkilö kuin edellä):<br/><br/>
                            Omavalvonnan suunnittelu- ja toimeenpanotyöryhmän jäsenet (nimi ja ammattinimike):<br/>
                            Katariina Juva, yrittäjä<br/><br/>
                            Kuvaus henkilöstön ja opiskelijoiden perehdyttämisestä ja kouluttamisesta omavalvonnan suunnitteluun ja toteuttamiseen (Voi olla osana perehdyttämissuunnitelmaa):<br/>
                        </p>
                        <h3>4. Asiakkaan ja omaisen osallistuminen ja asiakaspalaute</h3>
                        <p>Kuvaus asiakaspalautteen hankinnasta (millä keinoin ja kuinka usein asiakkailta ja omaisilta hankitaan palautetta?):<br/>
                            Asiakaspalautteet kerätään suullisesti. Asiakas tai omainen voi antaa palautetta viikoittain asiakaskäynnin yhteydessä, sähköpostitse tai puhelimitse.<br/><br/>
                            Kuvaus asiakaspalautteiden käsittelystä (miten asiakaspalautteet käsitellään yrityksessä / toimintayksikössä?):<br/>
                            Jos palaute tulee suullisesti niin kirjaan sen mahdollisimman tarkasti asiakkaan ilmaisun mukaan. Kirjallisen palautteen käyn läpi ja pohdin onko muistutus aiheellinen, mikäli on, kuinka tilanne korjataan ja korjataan se. Kirjalliseen huomautukseen laaditaan aina vastaus kirjallisena. Kaikki palautteet ja huomautukset arkistoidaan.<br/><br/>
                            Kuvaus asiakaspalautteen käytöstä toiminnan kehittämisessä (miten saatua palautetta hyödynnetään?):<br/>
                            Kun mahdollinen epäkohta huomataan, tehdään korjaus heti ja mietin onko tarvetta jatkotoimenpiteisiin. Muutokset palvelussa voi vaikuttaa useampaan asiakaskohteeseen.<br/><br/>
                            Kuvaus asiakaspalautejärjestelmän kehittämiseksi (miten yrityksessä aiotaan kehittää asiakaspalautteen hankintaa, käsittelyä ja/tai hyödyntämistä?):<br/>
                            Yritys kehittää suullisten asiakaspalautteiden dokumentointijärjestelmää. Viimeistään vuoden 2019 alussa otetaan käyttöön kotisivuilla palautelomake ja myöskin asiakaspalautelomake, joka voidaan jättää asiakkaan luokse.
                        </p>
                        <h3>5. Riskien ja epäkohtien tunnistaminen ja korjaavat toimenpiteet</h3>
                        <p>Tästä kokonaisuudesta laaditaan yrityksen sisäiseen käyttöön eri osa-alueita koskevat asiakirjat, joissa sovitaan suunnitelmat ja aikataulut todettujen puutteiden ja haittatapahtumien korjaavista toimenpiteistä.<br/><br/>
                            Kuvaus menettelystä, jolla toiminnan riskit, kriittiset työvaiheet ja vaaratilanteet tunnistetaan ennakoivasti (miten yrityksessä tehdään ennakkokartoitus riskeistä, kriittisistä työvaiheista ja vaaratilanteista?)<br/>
                            Pyrin miettimään ennakkoon mitkä ovat  työssäni vaaratilanteita tai joissa on riski sattua henkistä, ruumiillista tai taloudellista vahinkoa. Käyn läpi omaan palveluuni, tietosuojaan,sekä mahdollisesti asiakkaan itse aiheuttamat vaaratilanteet ja riskit.<br/><br/>
                            Kuvaus menettelystä, jolla läheltä piti – tilanteet ja havaitut epäkohdat käsitellään:<br/>
                            Mikäli kyseessä on ollut konkreettinen vaara, pyrin mahdollisuuksien mukaan poistamaan sen. Työskentelen asiakkaan kotona jolloin asiakas itse on aina otettava mukaan ja hänen mielipidettään on kuunneltava ja kunnioitettava. Mikäli epäkohta tai vaaratilanne on palvelusta, yrittäjän tulee kaikin tavoin pyrkiä poistamaan ja minimoimaan riskit niin että voidaan turvallisesti toimia jatkossa. Läheltä piti- ja vaaratilanteet kirjataan ylös ja tilastoidaan, ja kuinka tällainen voidaan jatkossa ehkäistä. Tarkoitus ei ole etsiä syyllistä vaan ottaa opiksi kuinka tällainen vältetään.<br/><br/>
                            Kuvaus menettelystä, jolla havaitut epäkohdat korjataan:<br/>
                            Yrittäjä miettii, miten epäkohdat korjataan ja vaikuttavatko ne laajemmin yrityksen työtapoihin. Ne, sekä tarvittavat muutokset työskentelyssä dokumentoidaan.  <br/><br/>
                            Kuvaus siitä, miten korjaavista toimenpiteistä tiedotetaan henkilöstölle ja tarvittaessa yhteistyötahoille:<br/>
                            Korjattavista toimenpiteistä riippuen mahdollisille yhteistyökumppaneille ilmoitetaan asiasta heti puhelimitse tai sähköpostitse.
                        </p>
                        <h3>6. Henkilöstö</h3>
                        <p>Kuvaus henkilöstön määrästä ja rakenteesta:<br/><br/>
                            Kuvaus henkilökunnan /yrittäjän ammattitaidon ja työhyvinvoinnin ylläpitämisestä ja osaamisen johtamisesta (osaamisen, ammattitaidon ja sen kehittymisen seuranta, täydennyskoulutussuunnittelu ja – seuranta menettelyt, sairauspoissaolojen seuranta, kehityskeskustelut – liitteenä voi olla henkilöstön täydennyskoulutussuunnitelma):<br/>
                            Yrityksessä seurataan oman alan täydentäviä koulutuksia ja niihin osallistutaan mahdollisuuksien mukaan.
                        </p>
                        <h3>7. Yrityksen toimitilat, laitteet ja tarvikkeet</h3>
                        <p>Kuvaus yrityksen toimitiloista (esim. huolto ja varastotilat):<br/>
                            Palvelu tapahtuu pääsääntöisesti asiakkaan luona.<br/><br/>
                            Kuvaus niistä laitteista ja tarvikkeista, joita käytetään asiakaskodeissa:<br/>
                            Pääsääntöisesti tarvittavat välineet ja tarvikkeet ovat asiakkaan.<br/><br/>
                            Kuvaus välineiden huoltomenetelmistä:<br/>
                            Välineet pestään aina käytön jälkeen.<br/><br/>
                            Kuvaus siitä, miten ja kuinka usein yritys uusii käyttämiään laitteita ja tarvikkeita:<br/>
                        </p>
                        <h3>8. Asiakasturvallisuus</h3>
                        <p>Yrityksen turvallisuussuunnittelusta ja turvallisuustoiminnasta vastaavan henkilön yhteystiedot:<br/>
                            Yrittäjä vastaa em. toiminnasta.<br/><br/>
                            Kuvaus asiakasturvallisuuden varmistamisesta:<br/>
                            Asiakasturvallisuus perustuu vastuullisuuteen ja luotettavuuteen sekä varmistuu ennakoivilla toimenpiteillä: riskien arvioinneilla, työn huolellisuudella ja sopimuksilla, voimassa olevilla vakuutuksilla, tiedotuksella yhteistyötahojen kanssa. Lisäksi välineet pidetään puhtaina ja kunnossa.
                        </p>
                        <h3>9. Asiakkaan asema ja oikeudet</h3>
                        <h3>10. Yrityksen toiminnan laadun varmistaminen</h3>
                        <h3>11. Asiakastietojen käsittely</h3>
                        <h3>12. Alihankintana tuotettujen palvelujen omavalvonta</h3>
                        <h3>13. Omavalvonnan toteuttamisen seuranta ja arviointi</h3>
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
                <main>

                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}