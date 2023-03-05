import './css/TimeLine.css';
import Img from '../components/Img';
import imgs from '../consts/imgs'
import { Link } from 'react-router-dom';
import imgsRoullete from '../consts/imgsRoullet.json';



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

    // function imageRoullete(e) {
    //     if (e.target.classList == 'image') {
    //         const imgsRoulleteArray = imgsRoullete[e.target.alt]
    //         // imageRoullete2(imgsRoulleteArray, imageSrc, k)
    //         let k = 0;
    //         const interval = setInterval(() => {
    //             if (k == 3) {
    //                 clearInterval(interval);
    //                 console.log('clear!')
    //                 k = 0;
    //             } else k++
    //             e.target.src = imgsRoulleteArray[k];
    //             console.log('teste')
    //             console.log(k)
    //         }, 2000);
    //     }
    // }

    let imgContainer = document.getElementsByClassName('img-container');
    function toggleBlurOnHover() {
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

    // function elementMouseOn(event) {
    //     toggleBlurOnHover();
    //     imageRoullete(event)
    // }

    // function elementMouseOut() {
    //     toggleBlurOnHover();
    //     clearInterval(imageRoullete)
    // }
    return (
        <>
            <p className='timeline-title'>Cabelos do Neymar: A Linha Do Tempo</p>
            <nav className='content'>
            {/* onMouseOver={event => elementMouseOn(event)} onMouseOut={elementMouseOut}  */}
                {returnArray}
            </nav>
        </>
    )
}

export default Content;