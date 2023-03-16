import './css/TimeLineContent.css';
import Img from '../components/Img';
import imgs from '../static/imgs.json';
import { Link } from 'react-router-dom';

function TimeLineContent() {
    const returnArray = 
    Array.from(Object.keys(imgs))
        .map(year => {
            return (
                <div key={year}>
                    <Link className='link-img' to={year} >
                        <Img className='img' link={imgs[year][1]} link2={imgs[year][2]} link3={imgs[year][3]} link4={imgs[year][4]} alt={year} />
                    </Link>
                </div>
            )
        })

    return (
        <>
            <p className='timeline-title'>Neymar's hairs: The Timeline</p>
            <nav className='content' >
                {returnArray}
            </nav>
        </>
    )
}

export default TimeLineContent;