import React from 'react';
import axios from 'axios';

function App() {
  const handlePaymentButtonClick = () => {
    // Provide the necessary data for installments
    const installmentsData = [
      { fee_head: 'fee_head_1', amount: 100 },
      { fee_head: 'fee_head_2', amount: 200 },
      // Add more installments as needed
    ];
  
    // Make an API request to the backend to process the payment
    axios
      .post('/payment', {
        installments: installmentsData,
      })
      .then(response => {
        // Handle the successful response
        console.log(response.data.message);
      })
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };  

  return (
    <div>
      <h1> Payment System</h1>
      <button onClick={handlePaymentButtonClick}>Pay Now</button>
    </div>
  );
}

export default App;
