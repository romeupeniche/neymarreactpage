import { Trans, useTranslation } from "react-i18next";
import "./TLPage.css";
import { useParams } from "react-router-dom";
import imgsJSON from "../static/imgs.json";

function TLPage() {
  const year = useParams().year;
  const { t } = useTranslation();
  window.scrollTo(0, 0);
  const imgs = imgsJSON[year].pageImgs;

  return (
    <div id="g-page-div" className={`page-div${year % 2 === 0 ? "-r" : ""}`}>
      <h1 id="page-title">
        {t("timelineText.timelineTitle")} <span id="year">{year}</span>
      </h1>
      {[1, 2, 3].map((num) => {
        return (
          <img
            key={`img${num}`}
            id={`page-img${num}`}
            src={imgs[num].link}
            alt={imgs[num].description}
            title={imgs[num].description}
          />
        );
      })}

      {[1, 2, 3].map((num) => {
        return (
          <p id={`page-text${num}`} key={`page-text${num}`}>
            {
              <Trans
                components={{ span: <span /> }}
              >{`timelineText.${year}text${num}`}</Trans>
            }
          </p>
        );
      })}
    </div>
  );
}

export default TLPage;
