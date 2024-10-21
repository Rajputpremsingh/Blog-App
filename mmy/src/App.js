import React, { useState } from 'react';
import './App.css';
// import Adres from './pages/Adres';
import Month from './pages/Month';

function App() {
  // const [address, setAddress] = useState('');

  // // Function to save address from Adres component
  // const saveAddress = (addressInput) => {
  //   setAddress(addressInput);
  //   console.log("Address saved:", addressInput); // Optional: for debugging
  // };


  


const [aaa, setAaa] = useState('')
const saveAddress = (inputAddress) => {
  setAaa(inputAddress);
  console.group('address saved successfully', inputAddress)
}

  return (
    <div>
      {/* Pass the saveAddress function as a prop */}
      {/* <Adres saveAddress={saveAddress} /> */}
      <Month saveAddress= {saveAddress}/>
    </div>
  );
}

export default App;
