import { Link } from "react-router-dom";
import './Footer.css'

export default function Footer() {
    if(window.innerWidth < 768) {
        return(
            <footer id='footer' className="footer items-center p-4 bg-primary text-primary-content">
                <div className="items-center grid-flow-col">
                    <p>© 2022 - Katan Pata</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <Link to="/rekisteriseloste">Rekisteriseloste</Link>
                    <Link to="/omavalvontasuunnitelma">Omavalvontasuunnitelma</Link>
                </div>
            </footer>
        )
    }else {
        return(
            <footer id="footerDesktop" className="footer items-center p-4 bg-primary text-primary-content">
                <div className="items-center grid-flow-col">
                    <p>© 2022 - Katan Pata</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <Link to="/rekisteriseloste">Rekisteriseloste</Link>
                    <Link to="/omavalvontasuunnitelma">Omavalvontasuunnitelma</Link>
                </div>
            </footer>
        )
    }
}