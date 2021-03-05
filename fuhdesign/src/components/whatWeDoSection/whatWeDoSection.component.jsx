import React from "react";
import WhatWeDoBackgroundBorder from "../../media/whatWeDoBackgroundBorder.svg";
import logoGreyCircle from "../../media/logoGreyCircle.svg";

import "./whatWeDoSection.styles.scss";

const WhatWeDoSection = () => {
  return (
    <section id="whatWeDoSection" className="whatWeDoSection">
      <div className="whatWeActuallyDo">
        <div className="whatWeActuallyDoOption">
          <h3>Kuchnie na wymiar, zabudowy wnęk i łazienek, szafy</h3>
        </div>
        <div className="whatWeActuallyDoOption">
          <h3>Cięcie na wymiar, oklejanie płyt, blatów</h3>
        </div>
        <div className="whatWeActuallyDoOption">
          <h3>Systemy drzwi przesuwnych, budowlanych</h3>
        </div>
        <div className="whatWeActuallyDoOption">
          <h3>Prowadnice, uchwyty, oświetlenie i wiele innych</h3>
        </div>
      </div>
      <div className="whatWeDoEndingParagraph">
          <h3>
            Od początku naszej działalności staramy się poznawać potrzeby
            naszych klientów. Wykonujemy meble na zamówienie, na każdy wymiar,
            indywidualnie pod klienta bądź w seriach z montażem. Ponadto
            zajmujemy się projektowaniem mebli i pomiarami u klienta.
          </h3>
        </div>
      <div className="whatWeDoOverlay"></div>
      <div className="whatWeDoOverlay2"></div>
      <div className="whatWeDoBackgroundSquare">
        <img
          className="whatWeDoBgBorder"
          src={WhatWeDoBackgroundBorder}
          alt=""
        />
        <img className="logoGreyCircleSvg" src={logoGreyCircle} alt="" />
      </div>
    </section>
  );
};

export default WhatWeDoSection;
