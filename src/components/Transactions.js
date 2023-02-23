import React from 'react'
import {BsFunnelFill} from 'react-icons/bs'

const Transactions = () => {
  return (
    <div>
      <div className="transaction-billings">Billings</div>
      <span className="all-bills">All bills</span>
      <span>
        <input className="transaction-search-bar" placeholder="Search name..."/>
      </span>
      <span className="filter-section">
        <span>Filters</span>
        <BsFunnelFill size={13} style={{paddingLeft:'4px'}}/>
      </span>
      <div className="transaction-table">
        <table className="transaction-table-name">
          <tr>
            <th>Date</th>
            <th>From</th>
            <th>Amount</th>
            <th>Medium</th>
          </tr>
          <tr>
            <td>24/01/2023</td>
            <td>vidishraj@okicic</td>
            <td>Rs. 4500.00</td>
            <td>Google Pay</td>
          </tr>
          <tr>
            <td>24/01/2023</td>
            <td>CREDIT AMOUNT REINITIATED</td>
            <td>Rs. 4500.00</td>
            <td>Credit card</td>
          </tr>
          <tr>
            <td>24/01/2023</td>
            <td>vidishraj@okicic</td>
            <td>Rs. 4500.00</td>
            <td>Google Pay</td>
          </tr>
          <tr>
            <td>24/01/2023</td>
            <td>vidishraj@okicic</td>
            <td>Rs. 4500.00</td>
            <td>Google Pay</td>
          </tr>
          <tr>
            <td>24/01/2023</td>
            <td>vidishraj@okicic</td>
            <td>Rs. 4500.00</td>
            <td>Google Pay</td>
          </tr>
          <tr>
            <td>24/01/2023</td>
            <td>vidishraj@okicic</td>
            <td>Rs. 4500.00</td>
            <td>Google Pay</td>
          </tr>
          <tr>
            <td>24/01/2023</td>
            <td>vidishraj@okicic</td>
            <td>Rs. 4500.00</td>
            <td>Google Pay</td>
          </tr>
          <tr>
            <td>24/01/2023</td>
            <td>vidishraj@okicic</td>
            <td>Rs. 4500.00</td>
            <td>Google Pay</td>
          </tr>
          <tr>
            <td>24/01/2023</td>
            <td>vidishraj@okicic</td>
            <td>Rs. 4500.00</td>
            <td>Google Pay</td>
          </tr>

        </table>
      </div>
    </div>
    
  )
}

export default Transactions