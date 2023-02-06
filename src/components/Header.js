import React from 'react'
import {CgProfile} from 'react-icons/cg'



const Header = () => {
  
  return (
   
    <div className="header">
        <div className="company-name">
          Accountant
        </div>
        <div className="my-profile">
          Welcome, Vidish Raj
        </div>
        <CgProfile style={{color:'black', cursor:'pointer', fontSize:'2.2em', paddingTop:'4.9px', backgroundColor:'rgb(215, 180, 116)',paddingRight:'3px'}}/>
    </div>
   
  )
}

export default Header