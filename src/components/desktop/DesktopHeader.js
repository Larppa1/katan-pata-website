import { Link } from "react-router-dom"

export default function DesktopHeader() {
    return(
        <div className="header"  style={{minHeight: '10vh'}}>
            <div className="navbar bg-primary text-primary-content">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl"
                        href='/'
                        style={{color: 'whitesmoke'}}>
                        <Link to='/'>Katan Pata</Link>
                    </a>
                </div>
                {/*END OF flex-1*/}
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <Link to='/'>Etusivu</Link>
                        </li>
                        <li>
                            <Link to='/palvelut'>Palvelut</Link>
                        </li>
                        <li>
                            <Link to='/hinnasto'>Hinnasto</Link>
                        </li>
                        <li>
                            <Link to='/ota-yhteytta'>Yhteystiedot</Link>
                        </li>
                        <li>
                            <Link to='/tietoja'>Tietoja</Link>
                        </li>
                    </ul>
                </div>
                {/*END OF flex-none*/}
            </div>
            {/*END OF navbar bg-primary text-primary-content*/}
        </div>
    )
}