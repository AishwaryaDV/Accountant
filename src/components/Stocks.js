import React from 'react'
import {BsFillPencilFill} from 'react-icons/bs'
import {TiArrowSortedDown} from 'react-icons/ti'
import {FaTrashRestore} from 'react-icons/fa'

const Stocks = () => {
  return (
    <div>
        <div className="zerodha">ZERODHA</div>
        <div className="main-portfolio">
            <div className="invested-section">Invested</div>
            <div className="current-section">Current</div>
        </div>
        <div className="main-protfolio-values">
            <div className="invested-section-value">Rs. 4,300.00</div>
            <div className="current-section-value">Rs. 4,800.00</div>
        </div>
        <div className="stocks-section">
            <div className="stock-1-section">
            <div className="stock-1-name">PRUDENT</div>
            <div className="stock-1-value">Rs. 4500.80</div>
            <div className="current-price-section">Current:</div>
            <div className="current-price-section-value">1022.80</div>
            <div className="quantity-section">Quantity:</div>
            <div className="quantity-value">40</div>
            <BsFillPencilFill className="pen-icon"/>
            <TiArrowSortedDown className="dropdown-icon"/>
            <FaTrashRestore className="dustbin-icon"/>
            </div>
            <br></br>
            <div className="stock-1-section">
            <div className="stock-1-name">PRUDENT</div>
            <div className="stock-1-value">Rs. 4500.80</div>
            <div className="current-price-section">Current:</div>
            <div className="current-price-section-value">1022.80</div>
            <div className="quantity-section">Quantity:</div>
            <div className="quantity-value">40</div>
            <BsFillPencilFill className="pen-icon"/>
            <TiArrowSortedDown className="dropdown-icon"/>
            <FaTrashRestore className="dustbin-icon"/>
            </div>
            <br></br>
            <div className="stock-1-section">
            <div className="stock-1-name">PRUDENT</div>
            <div className="stock-1-value">Rs. 4500.80</div>
            <div className="current-price-section">Current:</div>
            <div className="current-price-section-value">1022.80</div>
            <div className="quantity-section">Quantity:</div>
            <div className="quantity-value">40</div>
            <BsFillPencilFill className="pen-icon"/>
            <TiArrowSortedDown className="dropdown-icon"/>
            <FaTrashRestore className="dustbin-icon"/>
            </div>
            <br></br>
            <div className="stock-1-section">
            <div className="stock-1-name">PRUDENT</div>
            <div className="stock-1-value">Rs. 4500.80</div>
            <div className="current-price-section">Current:</div>
            <div className="current-price-section-value">1022.80</div>
            <div className="quantity-section">Quantity:</div>
            <div className="quantity-value">40</div>
            <BsFillPencilFill className="pen-icon"/>
            <TiArrowSortedDown className="dropdown-icon"/>
            <FaTrashRestore className="dustbin-icon"/>
            </div>
            <br></br>
            <div className="stock-1-section">
            <div className="stock-1-name">PRUDENT</div>
            <div className="stock-1-value">Rs. 4500.80</div>
            <div className="current-price-section">Current:</div>
            <div className="current-price-section-value">1022.80</div>
            <div className="quantity-section">Quantity:</div>
            <div className="quantity-value">40</div>
            <BsFillPencilFill className="pen-icon"/>
            <TiArrowSortedDown className="dropdown-icon"/>
            <FaTrashRestore className="dustbin-icon"/>
            </div>
            <br></br>
            <button className="add-stocks-btn">Add +</button>
        </div>
       
    </div>
  )
}

export default Stocks