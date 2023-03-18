import './css/Home.css';
import { Link } from 'react-router-dom';
import '../App.css';
import santos from '../static/images/santos.svg';
import barcelona from '../static/images/barcelona.svg';
import psg from '../static/images/psg.svg';
import chevron from '../static/images/chevright.svg';
import { Trans, useTranslation } from 'react-i18next';

const img1 = {
    link: 'https://media.gettyimages.com/id/826346670/photo/neymar-is-unveiled-during-a-press-conference-at-the-parc-des-princes-following-his-world.jpg?s=612x612&w=0&k=20&c=uOvhfKnP3lV6gWWtjXPQr3jlg54KwYNfI89SmM2aP4g=',
    description: "Neymar Is Unveiled At Parc des Princes As New Paris Saint-Germain Signing -  August 4, 2017 (By Jonathan Brady / PA Images via Getty Images)"
}

const img2 = {
    link: "https://media.gettyimages.com/id/638122828/photo/neymar-da-silva-santos-junior-of-fc-barcelona-reacts-during-their-copa-del-rey-round-of-16.jpg?s=612x612&w=0&k=20&c=YCtQv2VqZfwF_GK41tqWnWUuGiaXUsiHsz8n-Q5QKqc=",
    description: "Copa del Rey - Athletic Club v FC Barcelona - January 06, 2017 (By Victor Fraile / Power Sport Images via Getty Images)"
}
const img3 = {
    link: "https://media.gettyimages.com/id/157277112/photo/santos-brazil-december-01-neymar-of-santos-celebrates-a-scored-goal-during-a-match-between.jpg?s=612x612&w=0&k=20&c=56WbgX-jcSHzNQAp-tah-jMvjlWYSbFHDthjHyCtKCI=",
    description: "Brazilian Serie A - Santos v Palmeiras - December 01, 2012 (By Helio Suenaga / LatinContent via Getty Images)"
}

const Home = () => {
    const {t} = useTranslation();

    return (
        <>
            <div id='home-main-div'>
                <section id='home-sec1'>
                    <img id='home-img1' src={img1.link} alt={img1.description} title={img1.description} />
                    <div id='h-p1-div'>
                        <p id='home-p1'>{<Trans components={{ a: <a /> }}>{"homeText1"}</Trans>}</p>
                    </div>
                </section>
                <h1 id='home-title'>{t('homeTitle')}</h1>
                <section id='home-sec2'>
                    <div id='h-sec2-div1'>
                        <img id='home-img2' src={img2.link} alt={img2.description} title={img2.description} />
                        <p id='home-p2'>{t('homeText2')}</p>
                    </div>
                    <div id='h-sec2-div2'>
                        <img id='home-img3' src={img3.link} alt={img3.description} title={img3.description} />
                        <p id='home-p3'>{t('homeText3')}</p>
                    </div>
                </section>
                <section id='home-sec3'>
                    <div>
                        <img src={santos} alt="Santos FC" />
                        <p>2009 - 2013</p>
                    </div>
                    <img className='chev' src={chevron} alt="Arrow" />
                    <div>
                        <img src={barcelona} alt="FC Barcelona" />
                        <p>2013 - 2017</p>
                    </div>
                    <img className='chev' src={chevron} alt="Arrow" />
                    <div>
                        <img src={psg} alt="Paris Saint-Germain" />
                        <p>{t('psgtext')}</p>
                    </div>
                </section>

            </div>
            <Link to='timeline' id='hometo-timeline'>
                <div>
                    Conheça um pouco da história de Neymar ao decorrer dos anos.
                </div>
            </Link>
        </>
    )
}

export default Home;
