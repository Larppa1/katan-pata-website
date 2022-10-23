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
                        <p>Kuvaus asiakkaan ohjauksesta ja neuvonnasta sekä palvelutarpeen arvioinnista, palvelusopimuksen ja palvelusuunnitelman laatimisesta ja päivittämisestä sekä asiakkaan osallistumisesta päätöksentekoon:<br/>
                            Keskustellaan palvelun tarpeesta ja toteuttamistavoista asiakkaan ja/tai omaisten kanssa.  Asiakkaan luona käydään esittäytymässä ja kerrotaan suullisesti sopimusten sisällöstä ja sitovuudesta. Kirjallinen palvelusopimus ja –suunnitelma tehdään heti tai muutaman kerran jälkeen, jolloin molemmilla osapuolilla on selkeämpi käsitys palvelun toteuttamisesta. Sopimukset päivitetään, jos palveluun tulee oleellisia muutoksia. Asiakkaalle / omaisille tiedotetaan myös esim. mahdollisista etuuksista, joita voi hakea. Asiakas osallistu päätöksentekoon päivittäin: Kysellään ja kuunnellaan asiakkaan toiveita ja toteutetaan palvelu sen mukaan.<br/><br/>
                            Kuvaus siitä, miten asiakasta informoidaan palvelusopimuksen sisällöstä, palvelun kustannuksista ja sopimusmuutoksista:<br/>
                            Palvelusopimus tehdään aina asiakkaan läsnä ollessa. Siitä käydään jokainen kohta läpi yhdessä niin että asiakas ymmärtää mitä siinä tarkoitetaan ja sovitaan. Palvelusopimuksessa on näkyvissä molempien sopijaosapuolien tiedot, mitä palveluja asiakas tarvitsee, mikä on palvelun hinta, kuinka laskutus on sovittu, mikä on palvelun suorittamisen ajankohta sekä arvio kuinka paljon aikaa sovitun palvelun tekemiseen menee. Sopimusta tehdään kaksi kappaletta joista toinen jää asiakkaalle ja toinen palveluntuottajalle.<br/><br/>
                            Kuvaus kuluttajansuojaa koskevasta informaatiosta:<br/>
                            Kuluttajasuoja-asioista keskustellaan suullisesti ja se on myös kirjallisesti palvelusopimuksessa.<br/><br/>
                            Kuvaus asiakkaan itsemääräämisoikeuden ja osallistumisen toteutumisesta (yksityisyys, intimiteettisuoja, henkilökohtainen vapaus, koskemattomuus; perustuslaki 7§ ja 10§ sekä asiakaslaki 8 – 10§):<br/>
                            Asiakkaan itsemääräämisoikeutta kunnioitetaan aina. Asiakas sopii yhdessä yrittäjän kanssa palvelujen sisällön.<br/><br/>
                            Kuvaus menettelystä, miten huolehditaan ja kuka vastaa asiakkaan luovuttamista rahavaroista, avaimista ja muista tavaroista:<br/>
                            Asiakkaan mahdollisesti luovuttamien avainten vastaa yrittäjä. Avainten luovutus kirjataan palvelusopimukseen.<br/><br/>
                            Kuvaus menettelytavasta, jos todetaan, että asiakasta on kohdeltu epäasiallisesti tai loukkaavasti:<br/>
                            Asiakasta ei kohdella loukkaavasti. Jos hän kokee tällaista kohtelua, asia käsitellään yhdessä yrittäjän, asiakkaan ja omaisten kanssa.<br/><br/>
                            Kuvaus asiakassuhteen päättymiseen liittyvien asioiden valmistelusta ja toteuttamisesta:<br/>
                            Asiakassuhde voidaan päättää, jos osapuolet niin haluavat. Yhdessä sovitaan, milloin palvelu päättyy ja miten avaimet ja mahdolliset tavarat luovutetaan. Palvelusopimukseen kirjataan irtisanomisaika. Jos asiakas on tyytymätön saamaansa palveluun, hänellä on oikeus tehdä reklamaatio yritykselle. Henkilö ja yhteystiedot, jolle reklamaatio osoitetaan: Katariina Juva, Korteniityntie 122, 33980 Pirkkala. Puhelin 040-5644049. Sähköposti katanpata@gmail.com.<br/><br/>
                            Kuvaus menettelytavasta, miten yrityksessä käsitellään sen toimintaa koskevat reklamaatiot:<br/>
                            Yrittäjä käsittelee saamansa reklamaatiot. Samalla mietitään, antaako reklamaatio aihetta muuttaa yrityksen toimintatapoja vai onko virhe ollut sattumanvarainen. Asiakas saa kirjallisen vastauksen. Reklamaatiot dokumentoidaan.<br/><br/>
                            Kuvaus asiakkaan asemaan ja oikeuksiin liittyvästä seurannasta ja kehittämisestä:<br/>
                            Asiakkaan ja/tai omaisten kanssa keskustellaan palvelutilanteissa hänen toiveistaan. Palvelua kehitetään asiakkaiden toiveitten mukaan.
                        </p>
                        <h3>10. Yrityksen toiminnan laadun varmistaminen</h3>
                        <p>Kuvaus asiakkaiden suoriutumista, toimintakykyä, elämänhallintaa ja hyvinvointia ylläpitävästä ja edistävästä toiminnasta:<br/>
                            Autan asiakasta hänen jokapäiväiseen arkeen liittyvissä askareissa. Tähän kuuluu mm. ruoan valmistus asiakkaan mieltymysten mukaisesti erityisruokavaliot huomioon ottaen joko muutaman päivän tarpeiksi tai viikon tarpeiksi annoksina pakkaseen. Lisäksi palveluihini kuuluu mm. siivous, ikkunoiden pesu, nurmikon leikkuu, haravointi, lumien luonti, asiointipalvelu ja muut kodin pikkuaskareet. Työt teen yksilöllisesti, siten kuin kussakin kodissa niiden halutaan toteutuvan.<br/><br/>
                            Siivouspalveluja tuottavat yritykset: Kuvaus asiakkaan kodin siisteyden, pyykkihuollon ja jätehuollon järjestämiseen liittyvistä käytänteistä:<br/>
                            Kodin siisteyteen voi kuulua mm. normaali viikkosiivous, pyykin pesu tai sen järjestäminen, roskien pois vienti, jääkaapin siisteys (vanhat pois). Erikseen sovittuna huolehdin myös esim. ikkunoiden pesu.<br/><br/>
                            Ateriapalveluja tuottavat yritykset: Kuvaus asiakkaan ravitsemuksen ja ruokailun järjestämiseen liittyvistä käytänteistä:<br/>
                            Palvelu on asiakkaan luona. Ruoan valmistus ja/tai lämmitys asiakkaan mieltymysten mukaisesti erityisruokavaliot huomioon ottaen. Valmistus muutaman päivän tai vaikka viikon tarpeiksi annoksina pakastimeen. Tiskaus.<br/><br/>
                            Kuvaus hygieniakäytänteistä ja infektiotartuntojen ehkäisemisestä (sekä epidemiatilanteessa toimiminen):<br/>
                            Yrittäjä on suorittanut hygieniapassin. Käsien puhtaudesta huolehditaan, pestään aina tarvittaessa, esim. aina ennen ruoanlaittotoimia. Flunssaisena ei mennä asiakaskontaktiin.<br/><br/>
                            Kuvaus asiakastyön ja päivittäisen toiminnan kehittämisestä:<br/>
                            Toimintaa kehitetään saadun palautteen tai palvelussa esiin tulevien tarpeiden mukaan.
                        </p>
                        <h3>11. Asiakastietojen käsittely</h3>
                        <p>Kuvaus asiakastietojen kirjaamisesta, käsittelystä sekä salassapitosäädösten noudattamisesta:<br/>
                            Asiakasrekisterinä toimii manuaalinen kansio. Sinne kirjataan välttämättömät tiedot asiakkuudesta, ei esim. henkilötunnuksia. Asiakastietoja ei milloinkaan levitetä ulkopuolisille; yrityksessä noudatetaan salassapitosäädöksiä. Tietosuojavastaavan yhteystiedot: Yrityksellä ei ole sähköistä asiakasrekisteriä. Kansiossa pidettävästä asiakasrekisteristä vastaa Katariina Juva, Korteniityntie 122, 33980 Pirkkala, puh. 040 5644049.<br/><br/>
                            Kuvaus, miten asiakasta informoidaan henkilötietojen käsittelystä:<br/>
                            Asiakkaalle kerrotaan yrityksen salassapitokäytänteistä.<br/><br/>
                            Kuvaus henkilöstön perehdyttämisestä ja osaamisen varmistamisesta liittyen tietosuoja-asioihin ja asiakirjahallintoon:<br/><br/>
                            Kuvaus henkilötietolain 10§ mukaisen rekisteriselosteen ylläpitämisestä:<br/><br/>
                            Kuvaus asiakirjojen arkistoinnista ja päättyneiden asiakassuhteiden asiakirjojen käsittelystä:<br/>
                            Asiakirjat säilytetään yrittäjän kotona, Asiakassuhteen päättyessä palautetaan mahdolliset asiakkuuteen liittyvät asiakirjat esim. kunnan kotihoitoon, jos sellaisia on.<br/><br/>
                            Kuvaus, miten tiedonkulku järjestetään muiden asiakkaan palvelukokonaisuuteen kuuluvien toimijoiden kanssa:<br/>
                            Kiireelliset asiat hoidetaan puhelimitse, muulloinkin puhelinkeskustelu on käytännöllinen tapa. Tarvittaessa pyritään järjestämään tapaaminen, missä keskustellaan ajankohtaiset asiat. Salassapitosäädöksiin liittyviä tietoja ei lähetetä sähköisesti, etteivät ne missään vaiheessa joudu vääriin käsiin.<br/><br/>
                            Kuvaus asiakastietojen käsittelyn kehittämisestä:<br/>
                            Tietojen käsittely kehittyy ilmenevien tarpeiden tai lainsäädännön pohjalta.
                        </p>
                        <h3>12. Alihankintana tuotettujen palvelujen omavalvonta</h3>
                        <p>Kuvaus siitä, miten yritys valvoo alihankkijoilta ostettujen palvelujen laatua:<br/><br/>
                            Luettelo alihankkijoista:<br/><br/>
                            Kuvaus alihankintana tuotettujen palvelujen kehittämisestä:<br/><br/>
                        </p>
                        <h3>13. Omavalvonnan toteuttamisen seuranta ja arviointi</h3>
                        <p>Kuvaus omavalvontasuunnitelman päivittämisestä:<br/>
                            Omavalvonta päivitetään vuosittain tai aina tarvittaessa. Yrittäjä vastaa päivittämisestä.<br/><br/>
                            Omavalvontasuunnitelman hyväksyy ja vahvistaa yrittäjä.<br/><br/>
                            Paikka ja päiväys:<br/>
                            Pirkkalassa 25. kesäkuuta<br/><br/>
                            Allekirjoitus:<br/>
                            Katariina Juva
                        </p>
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