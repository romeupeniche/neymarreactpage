import './Header.css';
import logo from '../files/njrLogo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <Link className="logo" to='/'>
                <img src={logo} alt="" />
            </Link>
            <nav>
                <ul className='menu'>
                    <Link className='nav-item' to='timeline'>
                        <li className="navigation">
                            Pics
                        </li>
                    </Link>
                    <Link className='nav-item' to='/'>
                        <li className="navigation">
                            Início
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}




export default Header;

