import { Trans, useTranslation } from 'react-i18next'
import './TLPage.css'
import { useParams } from 'react-router-dom';

function TLPage(props) {
    const { year } = useParams();
    console.log(year)
    const { t } = useTranslation();
    window.scrollTo(0, 0)

    const MainDiv = innerprops => props.reverse ? <div id='g-page-div' className='page-div-r'>{innerprops.children}</div> : <div id='g-page-div' className='page-div'>{innerprops.children}</div>
    const pagetext1 = <p id='page-text1'>{<Trans components={{ span: <span /> }}>{props.children[0]}</Trans>}</p>
    const pagetext2 = <p id='page-text2'>{<Trans components={{ span: <span /> }}>{props.children[1]}</Trans>}</p>
    const pagetext3 = <p id='page-text3'>{<Trans components={{ span: <span /> }}>{props.children[2]}</Trans>}</p>
    return (
        <MainDiv>
            <h1 id='page-title'>{t('timelineText.timelineTitle')} <span id='year'>{props.year}</span></h1>
            <img id='page-img1' src={props.imgs[1].link} alt={props.imgs[1].description} title={props.imgs[1].description} />
            <img id='page-img2' src={props.imgs[2].link} alt={props.imgs[2].description} title={props.imgs[2].description} />
            <img id='page-img3' src={props.imgs[3].link} alt={props.imgs[3].description} title={props.imgs[3].description} />

            {pagetext1}
            {pagetext2}
            {pagetext3}
        </MainDiv>
    )
}

export default TLPage;