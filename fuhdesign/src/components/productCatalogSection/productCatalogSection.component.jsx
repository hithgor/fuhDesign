import React from "react";
import BackgroundCircle from "../../media/backgroundCircle.svg";

import "./productCatalogSection.styles.scss";

const ProductCatalogSection = () => {
  return (
    <section className="productCatalogSection">
      <div className="productCatalogTitleDiv">
        <h1 className="productCatalogTitle">Katalog Produktów</h1>
      </div>
      <div className="productCatalogDivider"></div>
      <div className="outerGridContainer">
        <div className="outerGridLeftContainer">
          <div className="wallOfText">
            <h3>
              Znajdziesz u nas wszystkie znane Ci marki. <br />
              Akcesoria firm BLUM, PEKA
              <br />
              Płyty meblowe, blaty o gruboci 28mm i 38mm
              <br />
              Fronty meblowe <br />
              Kosze cargo, szuflady MD, ociekarki <br />
              Kółka, ślizgi, stopki, nóżki <br />
              Meble Systemowe - dla każdego
              <br /> Meble produkcji własnej
              <br /> Obrzeża okleiny Thermoplast - wzornik kolorów <br />
              Oświetlenie, elektryka - DESIGNLIGHT
              <br />
              Profile, listwy PCV <br />
              Prowadnice i metaboxy <br />
              Ramki aluminiowe <br />
              Sprzęt AGD każdego producenta (na życzenie) <br />
              System do drzwi przesuwnych Laguna <br />
              Uchwyty Gamet, Nomet <br />
              Wkręty, śruby, złącza <br />
              Zamki meblowe
              <br />
              Zawiasy: BLUM, GTV, FGV
            </h3>
          </div>
          <div className="innerGridLeftContainer">
            <div className="supplierOuterDiv"></div>
            <div className="supplierOuterDiv"></div>
          </div>
        </div>
        <div className="outerGridRightContainer">
          <div className="supplierOuterDiv"></div>
          <div className="supplierOuterDiv"></div>
          <div className="supplierOuterDiv"></div>
          <div className="supplierOuterDiv mediaHidden"></div>
          <div className="supplierOuterDiv mediaHidden"></div>
          <div className="supplierOuterDiv mediaHidden"></div>
          <div className="supplierOuterDiv mediaHidden"></div>
          <div className="supplierOuterDiv mediaHidden"></div>
        </div>
      </div>
      <div className="backgroundCircleContainer"><img src={BackgroundCircle} alt=""/></div>
      <div className="backgroundCircleContainer2"><img src={BackgroundCircle} alt=""/></div>
    </section>
  );
};

export default ProductCatalogSection;
