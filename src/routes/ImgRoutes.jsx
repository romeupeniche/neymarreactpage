import TLPage from "../components/TLPage";
import imgs from "../static/imgs.json";

function ImgRoutes() {
    let _2010, _2011, _2012, _2013, _2014, _2015, _2016, _2017, _2018, _2019, _2020, _2021;

    _2010 = <TLPage
        year='2010'
        imgs={imgs[2010].pageImgs}
    >
        {"timelineText.2010text1"}
        {"timelineText.2010text2"}
        {"timelineText.2010text3"}
    </TLPage>

    _2011 = <TLPage
        year='2011'
        imgs={imgs[2011].pageImgs}
        reverse={true}
    >
        {"timelineText.2011text1"}
        {"timelineText.2011text2"}
        {"timelineText.2011text3"}
    </TLPage>

    _2012 = <TLPage
        year='2012'
        imgs={imgs[2012].pageImgs}
    >
        {"timelineText.2012text1"}
        {"timelineText.2012text2"}
        {"timelineText.2012text3"}
    </TLPage>

    _2013 = <TLPage
        year='2013'
        imgs={imgs[2013].pageImgs}
        reverse={true}
    >
        {"timelineText.2013text1"}
        {"timelineText.2013text2"}
        {"timelineText.2013text3"}
    </TLPage>

    _2014 = <TLPage
        year='2014'
        imgs={imgs[2014].pageImgs}
    >
        {"timelineText.2014text1"}
        {"timelineText.2014text2"}
        {"timelineText.2014text3"}
    </TLPage>

    _2015 = <TLPage
        year='2015'
        imgs={imgs[2015].pageImgs}
        reverse={true}
    >
        {"timelineText.2015text1"}
        {"timelineText.2015text2"}
        {"timelineText.2015text3"}
    </TLPage>

    _2016 = <TLPage
        year='2016'
        imgs={imgs[2016].pageImgs}
    >
        {"timelineText.2016text1"}
        {"timelineText.2016text2"}
        {"timelineText.2016text3"}
    </TLPage>

    _2017 = <TLPage
        year='2017'
        imgs={imgs[2017].pageImgs}
        reverse={true}
    >
        {"timelineText.2017text1"}
        {"timelineText.2017text2"}
        {"timelineText.2017text3"}
    </TLPage>

    _2018 = <TLPage
        year='2018'
        imgs={imgs[2018].pageImgs}
    >
        {"timelineText.2018text1"}
        {"timelineText.2018text2"}
        {"timelineText.2018text3"}
    </TLPage>

    _2019 = <TLPage
        year='2019'
        imgs={imgs[2019].pageImgs}
        reverse={true}
    >
        {"timelineText.2019text1"}
        {"timelineText.2019text2"}
        {"timelineText.2019text3"}
    </TLPage>

    _2020 = <TLPage
        year='2020'
        imgs={imgs[2020].pageImgs}
    >
        {"timelineText.2020text1"}
        {"timelineText.2020text2"}
        {"timelineText.2020text3"}
    </TLPage>

    _2021 = <TLPage
        year='2021'
        imgs={imgs[2021].pageImgs}
        reverse={true}
    >
        {"timelineText.2021text1"}
        {"timelineText.2021text2"}
        {"timelineText.2021text3"}
    </TLPage>

    return (
        [_2010, _2011, _2012, _2013, _2014, _2015, _2016, _2017, _2018, _2019, _2020, _2021]
    )
}

export default ImgRoutes;