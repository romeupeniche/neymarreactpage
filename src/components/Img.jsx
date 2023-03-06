import './Img.css'

function Img(props) {

    var count = -1
    var isExec = false
    let slideInterval, slideTime = 1500;
    function changeImg(year) {
        if (isExec) return
        isExec = true;
        
        let container = null
        Array.from(document.getElementsByClassName('inside-img-container')).forEach(elem => {
            if (elem.children[0].alt == year) {
                container = elem
            }
        })

        slideInterval = setInterval(() => {
            ++count
            if (count == 3) {
                count = -1;
                Array.from(document.getElementsByClassName('z')).forEach((elem) => {
                    elem.classList.remove('z')
                })
                clearInterval(slideInterval)
                isExec = false;
            } else {

                if (container.children[0].alt == year) {
                    container.children[count].classList.add('z')
                }
            }
        }, slideTime)
    }

    let hoverTimeout, hoverTime = 500;
    function runChangeImg(year) {
        hoverTimeout = setTimeout(function () {
            changeImg(year)
        }, hoverTime);
    }

    function stopChangeImg() {
        clearTimeout(hoverTimeout)
        clearInterval(slideInterval)
        Array.from(document.getElementsByClassName('z')).forEach((elem) => {
            elem.classList.remove('z')
        })
    }

    return (
        <div className='img-container' >
            <div className='inside-img-container' >
                <img className='image fst' src={props.link} alt={props.alt} onMouseOver={e => runChangeImg(e.target.alt)} onMouseOut={stopChangeImg} />
                <img className='image snd' src={props.link2} alt={props.alt} />
                <img className='image trd' src={props.link3} alt={props.alt} />
                <img className='image fth' src={props.link4} alt={props.alt} />
            </div>
            <p className='inner-text'>{`Cabelo do Neymar em ${props.alt}`}</p>
        </div>
    )
}

export default props => Img(props);
