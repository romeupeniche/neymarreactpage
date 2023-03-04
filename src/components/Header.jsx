import './Header.css';
import logo from '../files/njrLogo.png';
import { Link } from 'react-router-dom';


export default () =>
    <header className='header'>
        <Link className="logo" to='/'>
            <img src={logo} alt="" />
        </Link>
        <nav>
            <ul className='menu'>
                <li className="pageItem">
                    <Link className='navigation' to='timeline'>Pics</Link>
                </li>
                <li className="pageItem">
                    <Link className='navigation' to='/'>Início</Link>
                </li>
            </ul>
        </nav>
    </header>
