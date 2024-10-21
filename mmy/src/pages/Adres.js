import React, { useState } from 'react';

function Adres({ saveAddress }) {
    const [addressInput, setAddressInput] = useState('');

    const handleAddressChange = (e) => {
        setAddressInput(e.target.value);
    };

    const handleAddressSubmit = (e) => {
        e.preventDefault();
        if (addressInput.trim()) {
            saveAddress(addressInput);
            alert('Address saved!');
        } else {
            alert('Please enter a valid address');
        }
    };

    return (
        <div className='solar'>
            <div className='right-side'>
                <h2>Blaze Solar</h2>
                {/* Changed div to form */}
                <form className='form' onSubmit={handleAddressSubmit}>
                    <input
                        type='text'
                        placeholder='Enter your address'
                        value={addressInput}
                        onChange={handleAddressChange}
                        required
                    />
                    <label>
                        <input type='checkbox' /> I am a homeowner.
                    </label>
                    <button type='submit'>Go Solar</button>
                </form>
            </div>
        </div>
    );
}

export default Adres;
