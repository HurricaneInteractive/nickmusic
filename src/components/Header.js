import React from 'react'

import icm_logo from '../img/icm_logo.svg'

const Header = (props) => {
    return (
        <header>
            <h1><img src={icm_logo} alt="iCM Logo" /><span>iCM</span></h1>
        </header>
    )
}

export default Header;