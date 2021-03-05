import React from "react";
import GoogleMap from "../../media/googleMap.png";
import FooterNavbar from "./footerNavbar/footerNavbar.component";
import FooterRightbar from "./footerNavbar/footerRightbar.component";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <section className="footerSection">
      <div className="footerMainField">
        <div className="mapDiv">
          <img src={GoogleMap} alt="" />
        </div>
        <div className="locationTextDiv">
          <h3>
            F.U.H. ZESTAW AKCESORIA MEBLOWE <br />41-940 Piekary Śląskie Ul.
            Podmiejska 17 <br />Tel. /Fax (032) 284-16-99 <br /><br />E-mail do Hurtowni w
            Piekarach Śląskich: <br />fuh-zestaw@poczta.internetdsl.pl <br /><br />Godziny
            otwarcia hurtowni: <br />Pn - Pt. 9:00 - 17:00 <br />Sob. 8:00 - 13:00
          </h3>
        </div>
      </div>
      <FooterNavbar />
      <FooterRightbar />
    </section>
  );
};

export default Footer;
