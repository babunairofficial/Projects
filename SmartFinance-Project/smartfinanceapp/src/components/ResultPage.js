import React from 'react';

function ResultPage({ emi }) {
  return (
    <div className="container mt-5">
      <h2>Calculation Result</h2>
      <p>Based on your inputs, the permitted EMI is: ₹{emi.toFixed(2)}</p>
    </div>
  );
}

export default ResultPage;