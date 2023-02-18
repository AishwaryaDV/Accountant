import React from 'react'
import {PieChart, Pie} from 'recharts'
import {TiArrowSortedDown} from 'react-icons/ti'

const Savings = () => {
  const data=[
    {name:'PF',values:400,fill:'#008080'},
    {name:'PPF',values:200,fill:'#f6546a'},
    {name:'Gold',values:400,fill:'#c6e2ff'},
    {name:'Mutual funds',values:500,fill:'#fa8072'},
    {name:'FD',values:500,fill:'#696969'}
  ];

  return (
    <div>
      <div className="savings-header-section">Savings</div>
      <div className="charts-section">
        <div className="pie-chart">
            <PieChart width={120} height={120}>
              <Pie data={data} dataKey="values" outerRadius={60}></Pie>
            </PieChart>
            <div className="legend-1"></div>
            <div className="legend-2"></div>
            <div className="legend-3"></div>
            <div className="legend-4"></div>
            <div className="legend-5"></div>
            <div className="gold-section">
              <div className="gold-rate-section">Gold Rate/1gm on</div>
              <div className="gold-section-date">31/10/2023</div>
              <div className="gold-current-price-section">Rs. 5880.00</div>
            </div>
        </div>
        <div className="option-section">
        <div className="select-an-option-section">
        <button className="savings-btn">Select an option</button>
        </div>
        <br></br>
        <div className="amount-invested">Amount Invested</div>
        <div className="amount-invested-value">Rs. 50,000.00</div>
        <div className="interest-gained">Interest Gained</div>
        <div className="interest-gained-value">Rs. 5,000.00</div>
        <div className="current-balance">Current Balance</div>
        <div className="current-balance-value">Rs. 52,000.00</div>
        </div>
        
      </div>
     
      

    </div>
  )
}

export default Savings