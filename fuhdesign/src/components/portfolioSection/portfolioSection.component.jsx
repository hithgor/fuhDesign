import React from "react";
import BackgroundCircle from "../../media/backgroundCircle.svg";
import BottomBackgroundRect from "../../media/bottomBackgroundRect.svg";
import ImageGallery from "react-image-gallery";

import "./portfolioSection.styles.scss";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const PortfolioSection = () => {
  return (
    <section className="portfolioSection">
      <div className="portfolioSectionTitleDiv">
        <h1 className="portfolioSectionTitle">Nasze realizacje</h1>
      </div>
      <div className="portfolioSectionDivider"></div>
      <div className="portfolioSectionOuterGrid">
        <div className="innerGridLeft">
          <div className="bigPhoto">
            <ImageGallery height="920px" items={images} />;
            <div className="dashedBackgroundSquare">
              <img src={BottomBackgroundRect} alt="" />
            </div>
          </div>
        </div>
        <div className="innerGridRight">
          <div className="portfolioSectionWallOfText">
            <h3>
              Jesteśmy bardzo elastyczną firmą z którą można nawiązać współprace
              na bardzo korzystnych i miłych warunkach. Staramy się aby klient
              zaopatrujący się w naszej firmie wychodził za każdym razem
              zadowolony dzięki przyjaznej i profesjonalnej obsłudze i
              atrakcyjnym cenom.
            </h3>
          </div>
          <div className="innerGridRightPortfolioGrid"></div>
        </div>
      </div>
      <div className="rightBottomBackgroundCircle">
        <img src={BackgroundCircle} alt="" />
      </div>
    </section>
  );
};

export default PortfolioSection;
