import React from "react";
import formIcon from "../../media/icons/formIcon.svg"
import HousePlanningVideo from "../../media/housePlanningVideo.mp4";
import coolTriangle from "../../media/coolTriangle.svg";

import "./allPlannedSection.styles.scss";

const AllPlannedSection = () => {
  return (
    <section className="allPlannedSection">
      <div className="allPlannedTitle">
        <h1>Wszystko zaplanowane?</h1>
      </div>
      <div className="allPlannedButtons">
        <div className="button buttonUpper">
          <img src={formIcon} alt="fronty" />
          <h3>Druk zamówień frontów</h3>
        </div>
        <div className="button buttonLower">
          <img className="buttonPlyty" src={formIcon} alt="plyty" />
          <h3>Druk zamówień płyt</h3>
        </div>
      </div>
      <div className="videoOverlay">
        <video muted loop autoPlay src={HousePlanningVideo}></video>
      </div>
      <div className="coolTriangleContainer"><img src={coolTriangle} alt=""/></div>
    </section>
  );
};

export default AllPlannedSection;
