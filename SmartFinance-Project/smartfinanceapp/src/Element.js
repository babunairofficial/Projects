import React from 'react';
import { handleSubmit } from './Calculate';


export default function Element(props) {
    const onCalcClick = async (e) => {
        e.preventDefault();
        const userData = {
            monthlySalary: document.getElementById('monthlySalary').value,
            rent: document.getElementById('rent').value,
            foodExpenses: document.getElementById('foodExpenses').value,
            travelExpenses: document.getElementById('travelExpenses').value,
            utilityBills: document.getElementById('utilityBills').value,
            miscExpenses: document.getElementById('miscExpenses').value
        };

        try {
            const response = await fetch('/api/users/calculate-emi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            });

            if (response.ok) {
            const result = await response.json();
            // Navigate to a new page to display the result
            // You might want to use React Router for this
            // For now, let's just log the result
            console.log('Permitted EMI:', result.permittedEMI);
            } else {
            console.error('Error calculating EMI:', response.status);
            }
        } catch (error) {
            console.error('Error calculating EMI:', error);
        }
    };
    
  return (
    <div 
        className="d-flex justify-content-center align-items-center" 
        style={{ 
                height: '100vh', 
                backgroundColor: props.mode === 'light' ? 'white' : '#343a40', 
                color: props.mode === 'light' ? 'black' : 'white', 
                marginTop: '-10rem' // Adjust this value to push the content upward
        }}
    >
    {/* Your content goes here */}


        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className={`card shadow ${props.mode === 'light' ? 'bg-light' : 'bg-dark text-white'}`}>
                        <div className="card-body">
                            <div className="form-group mb-3">
                                <label htmlFor="monthlySalary" className={`form-label ${props.mode === 'light' ? 'text-dark' : 'text-light'}`}>Enter your monthly salary:</label>
                                <div className="input-group">
                                    <span className={`input-group-text ${props.mode === 'light' ? 'bg-light text-dark' : 'bg-secondary text-white'}`}>&#8377;</span>
                                    <input 
                                    type="number" 
                                    className={`form-control ${props.mode === 'light' ? 'bg-light text-dark' : 'bg-secondary text-white'}`}
                                    id="monthlySalary"
                                    aria-label="Amount in Rupees (with dot and two decimal places)"
                                    placeholder="0"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Ensure only non-negative integers are entered
                                    }}
                                    />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="rent" className={`form-label ${props.mode === 'light' ? 'text-dark' : 'text-light'}`}>Enter your rent:</label>
                                <div className="input-group">
                                    <span className={`input-group-text ${props.mode === 'light' ? 'bg-light text-dark' : 'bg-secondary text-white'}`}>&#8377;</span>
                                    <input 
                                    type="number" 
                                    className={`form-control ${props.mode === 'light' ? 'bg-light text-dark' : 'bg-secondary text-white'}`} 
                                    id="rent"
                                    aria-label="Amount in Rupees (with dot and two decimal places)"
                                    placeholder="0"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Ensure only non-negative integers are entered
                                    }}
                                    />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="foodExpenses" className={`form-label ${props.mode === 'light' ? 'text-dark' : 'text-light'}`}>Enter your food expenses:</label>
                                <div className="input-group">
                                    <span className={`input-group-text ${props.mode === 'light' ? 'bg-light text-dark' : 'bg-secondary text-white'}`}>&#8377;</span>
                                    <input 
                                    type="number" 
                                    className={`form-control ${props.mode === 'light' ? 'bg-light text-dark' : 'bg-secondary text-white'}`} 
                                    id="foodExpenses"
                                    aria-label="Amount in Rupees (with dot and two decimal places)"
                                    placeholder="0"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Ensure only non-negative integers are entered
                                    }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={`card shadow ${props.mode === 'light' ? 'bg-light' : 'bg-dark text-white'}`}>
                        <div className="card-body">
                            <div className="form-group mb-3">
                                <label htmlFor="travelExpenses" className={`form-label ${props.mode === 'light' ? 'text-dark' : 'text-light'}`}>Enter your travel expenses:</label>
                                <div className="input-group">
                                    <span className={`input-group-text ${props.mode === 'light' ? 'bg-light text-dark' : 'bg-secondary text-white'}`}>&#8377;</span>
                                    <input 
                                    type="number" 
                                    className={`form-control ${props.mode === 'light' ? 'bg-light text-dark' : 'bg-secondary text-white'}`} 
                                    id="travelExpenses"
                                    aria-label="Amount in Rupees (with dot and two decimal places)"
                                    placeholder="0"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Ensure only non-negative integers are entered
                                    }}
                                    />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="utilityBills" className={`form-label ${props.mode === 'light' ? 'text-dark' : 'text-light'}`}>Enter your utility bills expenses:</label>
                                <div className="input-group">
                                    <span className={`input-group-text ${props.mode === 'light' ? 'bg-light text-dark' : 'bg-secondary text-white'}`}>&#8377;</span>
                                    <input 
                                    type="number" 
                                    className={`form-control ${props.mode === 'light' ? 'bg-light text-dark' : 'bg-secondary text-white'}`} 
                                    id="utilityBills"
                                    aria-label="Amount in Rupees (with dot and two decimal places)"
                                    placeholder="0"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Ensure only non-negative integers are entered
                                    }}
                                    />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="miscExpenses" className={`form-label ${props.mode === 'light' ? 'text-dark' : 'text-light'}`}>Enter your other miscellaneous expenses:</label>
                                <div className="input-group">
                                    <span className={`input-group-text ${props.mode === 'light' ? 'bg-light text-dark' : 'bg-secondary text-white'}`}>&#8377;</span>
                                    <input 
                                    type="number" 
                                    className={`form-control ${props.mode === 'light' ? 'bg-light text-dark' : 'bg-secondary text-white'}`} 
                                    id="miscExpenses"
                                    aria-label="Amount in Rupees (with dot and two decimal places)"
                                    placeholder="0"
                                    onInput={(e) => {
                                        e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Ensure only non-negative integers are entered
                                    }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <div className={`card shadow ${props.mode === 'light' ? 'bg-light' : 'bg-dark text-white'}`} style={{ width: '50em' }}>
                    <div className="card-body">
                        <div className="d-grid gap-2">
                            <button className={`btn ${props.mode === 'light' ? 'btn-primary' : 'btn-light text-dark'}`} type="button" /*onClick={onCalcClick}*/>Calculate SmartFinance</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}