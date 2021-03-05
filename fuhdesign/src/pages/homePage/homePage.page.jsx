import React from 'react';
import LandingSection from "../../components/landingSection/landingSection.component"
import WhatWeDoSection from "../../components/whatWeDoSection/whatWeDoSection.component"
import AllPlannedSection from "../../components/allPlannedSection/allPlannedSection.component"
import ProductCatalogSection from "../../components/productCatalogSection/productCatalogSection.component"
import PortfolioSection from "../../components/portfolioSection/portfolioSection.component"
import Footer from "../../components/footer/footer.component"


import './homePage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <LandingSection />
    <WhatWeDoSection />
    <AllPlannedSection />
    <ProductCatalogSection />
    <PortfolioSection />
    <Footer />
  </div>
);

export default HomePage;