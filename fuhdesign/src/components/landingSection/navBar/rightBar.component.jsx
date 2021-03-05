import React from "react";
import formIcon from "../../../media/icons/formIcon.svg";

import "./rightBar.styles.scss";

const RightBar = () => {
  return (
    <div className="rightBarMainDiv">
      <div className="formIconsContainer">
        <div className="formIconContainer">
          <img className="formIcon" src={formIcon} alt="" />
          <p>Druk zamówień frontów</p>
        </div>
        <div className="formIconContainer">
          <img className="formIcon" src={formIcon} alt="" />
          <p>Druk zamówień płyt</p>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
