import './css/TimeLine.css';
import Img from '../components/Img';
import imgs from '../consts/imgs'
import { Link } from 'react-router-dom';



function Content() {
    const returnArray = [];
    for (let i in imgs) {
        returnArray.push(
            <>
                <Link className='link-img' to={i}>
                    <Img className='img' link={imgs[i]} alt={i} />
                </Link>
            </>
        )
    }
    let imgContainer = document.getElementsByClassName('img-container');
    function blurOnHover () {
        if (document.querySelector(".img-container:hover") != null) {
            Array.from(imgContainer).forEach(element => {
                element.classList.add('blur');
            });      
        }
        if (document.querySelector(".img-container:hover") == null) {
            Array.from(imgContainer).forEach(element => {
                element.classList.remove('blur');
            });            
        }
    }
    return (
        <>
            <p className='timeline-title'>Cabelos do Neymar: A Linha Do Tempo</p>
            <nav className='content' onMouseOver={blurOnHover} onMouseOut={blurOnHover}>
                {returnArray}
            </nav>
        </>
    )
}

export default Content;