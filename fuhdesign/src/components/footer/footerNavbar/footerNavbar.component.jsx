import React from 'react'
import Logo from '../../../media/logo.png'

import './footerNavbar.styles.scss'

const FooterNavbar = () => {
    return (
        <div className="footerNavBarMainDiv">
            <div className="footerLogoContainer">
                <h5>Copyright by PHU Zestaw 2021</h5>
            </div>
            <div className="footerMenuItemsContainer">
                    <a className='footerNavLinkItem'>Strona Główna</a>
                    <a className='footerNavLinkItem'>Co robimy</a>
                    <a className='footerNavLinkItem'>Co zrobiliśmy</a>
                    <a className='footerNavLinkItem'>Kontakt</a>
                
            </div>
        </div>
    )
}

export default FooterNavbar
