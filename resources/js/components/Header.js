import React from 'react'
import './Header.css'
import FlashOnIcon from '@material-ui/icons/FlashOn';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function Header() {
    return (
        <div className="header">

         <PersonIcon style={{ fontSize: 40, color:'white'}} />

        <div className="flashIcon">

        <FlashOnIcon fontSize="large" />
        </div>
        <div className="moreicon">
        <MoreHorizIcon fontSize="large"/>

        </div>

        </div>
    )
}

export default Header
