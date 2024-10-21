import React, { useState } from 'react'

function Loo() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName:'',
        email: '',
        number: ''
    })
    const handleChange = (e) => {
        setFormData({
            ...formData,[e.target.name]: e.target.value
        })
    }
    const handleSubmit =(e) => {
        e.preventDefault();
        try{
            if(!formData.firstName  || !formData.lastName || !formData.email ||!formData.number) {
                throw new Error('all fields are required');
            }
        }
        catch(error) {
            alert('failed to save the data')
        }
    }
  return (
    <div>
        <div className='container'>
            <form onSubmit={handleSubmit}>
                
                <input type='text' placeholder='enter first name' name='firstName' value={formData.firstName} onChange={handleChange} />
            
                
                    <input type="text" placeholder='enter your last name' name='firstName' value={formData.lastName} onChange={handleChange} />
                
                    <input type='email' placeholder='enter your email' name='lastName' value={formData.email} onChange={handleChange} />
                
                    <input type='number' placeholder='enter your phone no' name='email' value={formData.number} onChange = {handleChange} />
                
                <div>
                    <button type='submit'> Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}
export default Loo;
