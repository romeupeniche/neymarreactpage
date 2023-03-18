import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../static/images/njr-logo.png';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import menudrop from '../static/images/menu.svg';

function Header() {
    const { t } = useTranslation();

    function menuToggle(e) {
        if (e.type === 'mouseout') {
            if (document.getElementById('menu').classList.contains('active')) {
                document.getElementById('menu').classList.remove('active')
            }
        } else {
            document.getElementById('menu').classList.toggle('active')
        }
    }


    return (
        <header className='header'>
            <Link className="logo" to='/'>
                <img src={logo} alt="" />
            </Link>
            <nav id='menu-nav'>
                <ul id='menu'>
                    <li className="navigation">
                        <Link className='nav-item' to='/'>
                            {t("headerHome")}
                        </Link>
                    </li>
                    <li className="navigation">
                        <Link className='nav-item' to='timeline'>
                            {t("headerTimeline")}
                        </Link>
                    </li>
                </ul>
                <LanguageSwitcher id='language-switcher-resp' />
            </nav>
            <LanguageSwitcher id='language-switcher' />
            <img id='menu-drop' src={menudrop} alt="Menu Drop Icon" onClick={menuToggle} onMouseOut={menuToggle}/>
        </header>
    )
}

export default Header;