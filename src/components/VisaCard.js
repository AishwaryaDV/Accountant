import React from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'


const VisaCard = () => {
  return (
    <>
    <div className="virtual-card-1">
                <div className="visa-card">VISA</div>
                <div className="card-number">* * * *  3 4 5 6</div>
                <BsThreeDotsVertical style={{fontWeight:'bold', fontSize:'1.5em',paddingLeft:'80px',paddingTop:'38px'}}/>
            </div>
             <div className="virtual-card-2">
             <div className="visa-card-2">Rupay</div>
                <div className="card-number">* * * *  1 0 9 3</div>
                <BsThreeDotsVertical style={{fontWeight:'bold', fontSize:'1.5em',paddingLeft:'80px',paddingTop:'38px'}}/>
         </div>
         </>
            
  )
}

export default VisaCard


