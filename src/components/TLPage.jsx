import { Trans, useTranslation } from "react-i18next";
import "./TLPage.css";
import { useParams } from "react-router-dom";
import imgsJSON from "../static/imgs.json";

function TLPage() {
  const urlParams = useParams();
  const year = urlParams.year;
  const { t } = useTranslation();
  window.scrollTo(0, 0);
  const reverse = year % 2 === 0;

  const imgs = imgsJSON[year].pageImgs;
  const MainDiv = (innerprops) =>
    reverse ? (
      <div id="g-page-div" className="page-div-r">
        {innerprops.children}
      </div>
    ) : (
      <div id="g-page-div" className="page-div">
        {innerprops.children}
      </div>
    );
  const pagetext1 = (
    <p id="page-text1">
      {
        <Trans
          components={{ span: <span /> }}
        >{`timelineText.${year}text1`}</Trans>
      }
    </p>
  );
  const pagetext2 = (
    <p id="page-text2">
      {
        <Trans
          components={{ span: <span /> }}
        >{`timelineText.${year}text2`}</Trans>
      }
    </p>
  );
  const pagetext3 = (
    <p id="page-text3">
      {
        <Trans
          components={{ span: <span /> }}
        >{`timelineText.${year}text3`}</Trans>
      }
    </p>
  );
  return (
    <MainDiv>
      <h1 id="page-title">
        {t("timelineText.timelineTitle")} <span id="year">{year}</span>
      </h1>
      <img
        id="page-img1"
        src={imgs[1].link}
        alt={imgs[1].description}
        title={imgs[1].description}
      />
      <img
        id="page-img2"
        src={imgs[2].link}
        alt={imgs[2].description}
        title={imgs[2].description}
      />
      <img
        id="page-img3"
        src={imgs[3].link}
        alt={imgs[3].description}
        title={imgs[3].description}
      />

      {pagetext1}
      {pagetext2}
      {pagetext3}
    </MainDiv>
  );
}

export default TLPage;
