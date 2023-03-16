import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../static/images/njr-logo.png'

function Header() {
    return (
        <header className='header'>
            <Link className="logo" to='/'>
                <img src={logo} alt="" />
            </Link>
            <nav>
                <ul className='menu'>
                    <Link className='nav-item' id='pics' to='timeline'>
                        <li className="navigation">
                            Timeline
                        </li>
                    </Link>
                    <Link className='nav-item' to='/'>
                        <li className="navigation">
                            Home
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}




export default Header;

