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
    return (
        <>
            <p className='timeline-title'>Cabelos do Neymar: A Linha Do Tempo</p>
            <nav className='content'>
                {returnArray}
            </nav>
        </>
    )
}

export default Content;