import { Link } from "react-router-dom"

export default function Navbar() {
    if(window.innerWidth < 768) {
        return(
            <div className="header"  style={{minHeight: '10vh'}}>
                <div className="navbar bg-primary text-primary-content">
                    <div className="flex-1">
                        <Link className="btn btn-ghost normal-case text-xl"
                            to='/'
                            style={{color: 'whitesmoke'}}>Katan Pata
                        </Link>
                    </div>
                    {/*END OF flex-1*/}
                    <div className="dropdown dropdown-end"
                        style={{color: 'whitesmoke'}}>
                        <label className="btn btn-square btn-ghost"
                            tabIndex={0}>
                            <svg className="inline-block w-5 h-5 stroke-current"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16">
                                </path>
                            </svg>
                        </label>
                        <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
                            tabIndex={0}>
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
                    {/*END OF dropdown*/}
                </div>
                {/*END OF navbar bg-primary text-primary-content*/}
            </div>
        )
    }else {
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
}