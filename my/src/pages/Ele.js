import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Ele() {
    const [electricBill, setElectricBill] = useState()
    const [monthlyBill, setMonthlyBill] = useState()

    const handleSliderChange = (e) => {
        const value = e.target.value;
        setElectricBill(value)
        setMonthlyBill(value);

    }

    const handleInputValue = (e) => {
        const value = e.target.value;
        setMonthlyBill(value);
        setElectricBill(value);

    }
  return (
    <div className='container'>
        <h2>Monthly electric Bill</h2>
        <p>Let solar do the magic for the House</p>
        <div className='slider'>
            <input type='range' min='10' max='6000' value={electricBill} onChange={handleSliderChange}></input>
            <div className='slider-value'>
            <span>$10</span>
            <span>${electricBill}</span>
            <span>$6000</span>
            </div>
        </div>
        <div className=''>
            <input type='number' value={monthlyBill} onChange={handleInputValue}></input>
            <button className='submit'>Go Electric</button>

        </div>

    </div>
  )
}
export default Ele;
