import React from "react";
import greyFormIcon from "../../../media/icons/greyFormIcon.svg";

import "./footerRightBar.styles.scss";

const FooterRightBar = () => {
  return (
    <div className="footerRightBarMainDiv">
      <div className="footerFormIconsContainer">
        <div className="footerFormIconContainer">
          <img className="footerFormIcon" src={greyFormIcon} alt="" />
          <p>Druk zamówień frontów</p>
        </div>
        <div className="footerFormIconContainer">
          <img className="footerFormIcon" src={greyFormIcon} alt="" />
          <p>Druk zamówień płyt</p>
        </div>
      </div>
    </div>
  );
};

export default FooterRightBar;
