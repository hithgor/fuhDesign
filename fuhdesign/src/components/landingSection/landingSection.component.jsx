import React from 'react'
import NavBar from './navBar/navBar.component'
import RightBar from './navBar/rightBar.component'

import './landingSection.styles.scss'

const LandingSection = () => {
    return (
        <section className="landingSection">
            <div className="landingSectionOverlay"></div>
            <NavBar />
            <RightBar />
            <div className="landingSectionTextContainer">
                <h1>Usługi stolarskie</h1>
                <h3>Z naszym wsparciem stworzysz najpiękniejsze meble tego świata</h3>
            </div>
            <div className="arrowsDiv">
                <a href="#whatWeDoSection" id="viewProjectsMouseLink">
                    <div className="mouseContainer">
                        <div className="mouse_scroll">
                            <div className="mouse">
                                <div className="wheel"></div>
                            </div>
                            <div>
                                <span className="m_scroll_arrows unu"></span>
                                <span className="m_scroll_arrows doi"></span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default LandingSection
