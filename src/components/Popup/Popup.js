import withOverlayAndEscClose from "../../hoc/withOverlayAndEscClose";
import React from 'react';
import './Popup.css'

function Popup({isOpen, children}) {

  const open = isOpen ? 'popup_opened' : '';

  return (
    <div className={`popup ${open}`}>
      <div className="popup__container">
          {children}
      </div>
    </div>
  )
}

export default withOverlayAndEscClose(Popup) ;
