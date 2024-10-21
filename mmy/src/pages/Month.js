import React, { useState } from 'react'

function Month({saveAddress}) {

    const [inputAddress, setInputAddress] = useState()

    const handleInputAddress = (e) => {
        setInputAddress(e.target.value); 

    }
    const handleSubmit =(e) => {
        e.preventDefault();
        if(inputAddress.trim())
            saveAddress(inputAddress);
        alert('sgjshgjahs')

    } 
  return ( 
    <div className='solar'>
        <div className='right-side'>
            <form className='form' onSubmit={handleSubmit}>
                <input type='text' placeholder='enter your address' value={inputAddress} onChange={handleInputAddress}></input>
                <label>
                    <input type='checkbox'></input> prem is  a homeowner.
                </label>
                <button type='submit'>Go solar</button>
            </form>
        </div>

    </div>
  )
}
export default Month
