import './Footer.css';
import github from '../static/images/github.svg';

function Footer() {
    return (
    <footer id='footer'>
        <p id='footer-img'>All images from <a className='references' href="https://www.gettyimages.ca/photos/neymar" target="_blank" rel="noreferrer">gettyimages.ca</a></p>
        <a href="https://github.com/romeupeniche" target='_blank' rel="noreferrer"><img src={github} alt="github" /></a>
        <p id='footer-info'>All stats from <a className='references' href="https://www.transfermarkt.us/neymar/leistungsdaten/spieler/68290" target="_blank" rel="noreferrer">transfermarkt.us</a></p>
    </footer>
    )
}

export default Footer;