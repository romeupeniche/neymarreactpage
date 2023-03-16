import './TLPage.css'

function TLPage(props) {
    if(props.reverse) {
        return (
            <div id='g-page-div' className='page-div-r'>
                <h1 id='page-title'>Neymar JR's Overall in <span id='year'>{props.year}</span></h1>
                <img id='page-img1' src={props.imgs[1].link} alt={props.imgs[1].description} title={props.imgs[1].description} />
                <img id='page-img2' src={props.imgs[2].link} alt={props.imgs[2].description} title={props.imgs[2].description} />
                <img id='page-img3' src={props.imgs[3].link} alt={props.imgs[3].description} title={props.imgs[3].description} />
                {/* <p id='page-text1'>{props.children[0]}</p> */}
                {props.children[0]}
                {props.children[1]}
                {props.children[2]}
            </div>
        )
    } else {
        return (
            <div id='g-page-div' className='page-div'>
                <h1 id='page-title'>Neymar JR's Overall in <span id='year'>{props.year}</span></h1>
                <img id='page-img1' src={props.imgs[1].link} alt={props.imgs[1].description} title={props.imgs[1].description} />
                <img id='page-img2' src={props.imgs[2].link} alt={props.imgs[2].description} title={props.imgs[2].description} />
                <img id='page-img3' src={props.imgs[3].link} alt={props.imgs[3].description} title={props.imgs[3].description} />
                {/* <p id='page-text1'>{props.children[0]}</p> */}
                {props.children[0]}
                {props.children[1]}
                {props.children[2]}
            </div>
        )
    }
}

export default props => TLPage(props);