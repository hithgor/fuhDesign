import React from 'react'
import Logo from '../../../media/logo.png'

import './navBar.styles.scss'

const NavBar = () => {
    return (
        <div className="navBarMainDiv">
            <div className="logoContainer">
                <img src={Logo} alt="logo" className="logoImage"/>
            </div>
            <div className="menuItemsContainer">
                    <a className='navLinkItem'>Strona Główna</a>
                    <a className='navLinkItem'>Co robimy</a>
                    <a className='navLinkItem'>Co zrobiliśmy</a>
                    <a className='navLinkItem'>Kontakt</a>
                
            </div>
        </div>
    )
}

export default NavBar
