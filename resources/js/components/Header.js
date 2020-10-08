import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { IconButton } from '@material-ui/core';
function Header() {
    return (
        <div className="header">
     <IconButton >
     <div className="avatar">
         <PersonIcon fontSize="large" />
     </div>
         </IconButton>

        <IconButton>
        <div>
       <img  className="thunder__image" src="img/thunder logo.png" />
        </div>
       </IconButton>
        <IconButton>
        <div className="moreicon">
        <MoreHorizIcon fontSize="large"/>
        </div>
</IconButton>

        </div>
    )
}

export default Header
