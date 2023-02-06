import React from 'react'
import circle from '../assets/profile.png'
import {FiBookOpen} from 'react-icons/fi'
import {BsThreeDotsVertical} from 'react-icons/bs'


const Overview = () => {
  return (
    <div className="overview">
        <div className='theme-section'>

        </div>

       <div className="summary-section"> 
       <div className="total-overview">
       <div className="left-overview">
       <FiBookOpen style={{color:'rgb(217, 54, 54)', fontSize:'1.7em', paddingLeft:'20px', paddingTop:'20px'}}/>
       <div className="overview-header"> Overview</div> 
       <div className="total-balance">Total balance</div>
       <div className="credit-points">Credit points</div>
       <div className="total-pl">Total P & L</div>
       <div className="total-balance-value">Rs. 1.80 L</div>
       <div className="credit-points-value">755</div>
       <div className="total-pl-value">Rs. 50,000.00</div>
       <div className="show-cards">Show All</div>
       </div>
       <div className="right-overview">
            <div className="virtual-card">
                <div className="visa-card">VISA</div>
                <div className="card-number">* * * *  3 4 5 6</div>
                <BsThreeDotsVertical style={{fontWeight:'bold', fontSize:'1.5em',paddingLeft:'80px',paddingTop:'38px'}}/>
            </div>
       </div>
       </div>
       </div>


       <div className="logo-section"></div>
    </div>
    
  )
}

export default Overview

