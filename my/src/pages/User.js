import React from 'react'
import { Link } from 'react-router-dom';
import './User.css'

function User() {
  return (
    <div className='solar'>
        <div className='left-side'>
            <h1>React Js Dev <br />
            React js is Good to use to check <br />
            <label className='highlight'>Solar panels</label>
            </h1>
        </div>
        <div className='right-side'>
            <h2>React in Dev env</h2>
            <p>Prem singh Rajput</p>
            <form className='form-bar'>
                <input type='text' placeholder='Enter Your Address'></input>
                <label>
                    <input type='checkbox'></input>I am a homeowner.

                </label>
                <button type='submit'>Go Solar</button>
            </form>
        </div>

    </div>
  )
}
export default User;
