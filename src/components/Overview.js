import React from 'react'
import VisaCard from './VisaCard'
import {FiBookOpen} from 'react-icons/fi'
import Logo from '../assets/logo.png'
import themePic from '../assets/theme-pic.png'

const Overview = () => {
  return (
    <div className="overview">
        <div className='theme-section'>
          <img src={themePic} style={{maxWidth:'100%',height:'1300', borderRadius:'17px 17px 20px 20px'}}/>
         
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
              {/* <div className="add-card"> */}
                <button className="add-card">Add new card</button>
              {/* </div> */}
            <div className="card-types">
              <VisaCard />
            </div>
       </div>
       </div>
       </div>


       <div className="logo-section">
        <div className="logo-picture">
        <img src={Logo} />
        </div>
       </div>
    </div>
    
  )
}

export default Overview

