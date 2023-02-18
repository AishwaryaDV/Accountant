import React from 'react'
import {PieChart, Pie} from 'recharts'
import {SlCalender} from 'react-icons/sl'

const Analytics = () => {
  const data_1=[
    {name:'Total credits',values:400,fill:'#008080'},
    {name:'Total debits',values:200,fill:'#f6546a'},
    {name:'Total amount',values:400,fill:'#c6e2ff'}
  ];
  const data_2=[
    {name:'Credit card total',values:400,fill:'#008080'},
    {name:'Sebit card total',values:200,fill:'#f6546a'},
    {name:'Total amount',values:400,fill:'#c6e2ff'}
  ];
  return (
    <>
    <div className="analytics-header-section">Analytics</div>
    <div className="analytics-section">
      <div className="piechart-1-section">
            <div className="piechart-1-data">
              <div className="piechart-1">
              <PieChart width={110} height={110}>
              <Pie data={data_1} dataKey="values" outerRadius={50} innerRadius={40}></Pie>
            </PieChart>
              </div>
              <div className="piechart-1-accounts">
                <div className="piechart-1-debits">Total Debits</div>
                <div className="piechart-1-debits-value">Rs. 38,000.90</div>
                <div className="piechart-1-credits">Total Credits</div>
                <div className="piechart-1-credits-value">Rs. 87,324.00</div>
              </div>
            </div>
      </div>
      <div className="piechart-2-section">
      <div className="piechart-1-data">
              <div className="piechart-1">
              <PieChart width={110} height={110}>
              <Pie data={data_2} dataKey="values" outerRadius={50} innerRadius={40}></Pie>
            </PieChart>
              </div>
              <div className="piechart-2-accounts">
                <div className="piechart-2-debits">Credit card total</div>
                <div className="piechart-2-debits-value">Rs. 10,000.90</div>
                <div className="piechart-2-credits">Debit card total</div>
                <div className="piechart-2-credits-value">Rs. 87,324.00</div>
              </div>
            </div>
      </div>
    </div>
   
    <div className="analytics-calender-range">
      <SlCalender/>
    </div>
  
    </>
  )
}

export default Analytics