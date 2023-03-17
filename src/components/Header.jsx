import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../static/images/njr-logo.png'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Header() {
    const { t } = useTranslation();
    return (
        <header className='header'>
            <Link className="logo" to='/'>
                <img src={logo} alt="" />
            </Link>
            <nav>
                <ul className='menu'>
                    <Link className='nav-item' id='pics' to='timeline'>
                        <li className="navigation">
                            {t("headerTimeline")}
                        </li>
                    </Link>
                    <Link className='nav-item' to='/'>
                        <li className="navigation">
                            {t("headerHome")}
                        </li>
                    </Link>
                </ul>
            </nav>
            <LanguageSwitcher id='language-switcher' />
        </header>
    )
}




export default Header;

