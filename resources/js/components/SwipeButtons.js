import React from 'react'
import './SwipeButtons.css'
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import { IconButton } from '@material-ui/core';
import FlashOnIcon from '@material-ui/icons/FlashOn';
function SwipeButtons() {
    return (
        <div className="swipeButtons">

            <IconButton>
            <div className="swipeButtons__left">

           <CloseIcon/>

            </div>
            </IconButton>

            <IconButton>
               <div className="swipeButtons__lightning">
               <img  className="thunder__imageButton" src="img/thunder logo.png" />
               <img  className="thunder__imageButton" src="img/thunder logo.png" />
             </div>
            </IconButton>

            <IconButton>
                <div className="swipeButtons__star">
           <StarRateIcon />
           </div>
         </IconButton>


        </div>
    )
}

export default SwipeButtons
