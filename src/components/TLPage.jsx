import { useTranslation } from 'react-i18next'
import './TLPage.css'

function TLPage(props) {
    const { t } = useTranslation();

    const MainDiv = innerprops => props.reverse ? <div id='g-page-div' className='page-div-r'>{innerprops.children}</div> : <div id='g-page-div' className='page-div'>{innerprops.children}</div>
    const pagetext1 = props.children[0] 
    const pagetext2 = props.children[1] 
    const pagetext3 = props.children[2] 
        return (
            <MainDiv>
                <h1 id='page-title'>{t('timelineText.timelineTitle')} <span id='year'>{props.year}</span></h1>
                <img id='page-img1' src={props.imgs[1].link} alt={props.imgs[1].description} title={props.imgs[1].description} />
                <img id='page-img2' src={props.imgs[2].link} alt={props.imgs[2].description} title={props.imgs[2].description} />
                <img id='page-img3' src={props.imgs[3].link} alt={props.imgs[3].description} title={props.imgs[3].description} />
                <p id='page-text1' dangerouslySetInnerHTML={{ __html: pagetext1 }} />
                <p id='page-text2' dangerouslySetInnerHTML={{ __html: pagetext2 }} />
                <p id='page-text3' dangerouslySetInnerHTML={{ __html: pagetext3 }} />
            </MainDiv>
        )
}

export default TLPage;