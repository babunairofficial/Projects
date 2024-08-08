import React from 'react'

export default function Element() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="form-group mb-3">
                                <label htmlFor="monthlySalary" className="form-label">Enter your monthly salary:</label>
                                <div className="input-group">
                                    <span className="input-group-text">&#8377;</span>
                                    <input 
                                    type="number" 
                                    className="form-control" 
                                    id="monthlySalary"
                                    aria-label="Amount in Rupees (with dot and two decimal places)"
                                    placeholder="0"
                                    />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="rent" className="form-label">Enter your rent:</label>
                                <div className="input-group">
                                    <span className="input-group-text">&#8377;</span>
                                    <input 
                                    type="number" 
                                    className="form-control" 
                                    id="rent"
                                    aria-label="Amount in Rupees (with dot and two decimal places)"
                                    placeholder="0"
                                    />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="foodExpenses" className="form-label">Enter your food expenses:</label>
                                <div className="input-group">
                                    <span className="input-group-text">&#8377;</span>
                                    <input 
                                    type="number" 
                                    className="form-control" 
                                    id="foodExpenses"
                                    aria-label="Amount in Rupees (with dot and two decimal places)"
                                    placeholder="0"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="form-group mb-3">
                                <label htmlFor="travelExpenses" className="form-label">Enter your travel expenses:</label>
                                <div className="input-group">
                                    <span className="input-group-text">&#8377;</span>
                                    <input 
                                    type="number" 
                                    className="form-control" 
                                    id="travelExpenses"
                                    aria-label="Amount in Rupees (with dot and two decimal places)"
                                    placeholder="0"
                                    />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="utilityBills" className="form-label">Enter your utility bills expenses:</label>
                                <div className="input-group">
                                    <span className="input-group-text">&#8377;</span>
                                    <input 
                                    type="number" 
                                    className="form-control" 
                                    id="utilityBills"
                                    aria-label="Amount in Rupees (with dot and two decimal places)"
                                    placeholder="0"
                                    />
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="miscExpenses" className="form-label">Enter your other miscellaneous expenses:</label>
                                <div className="input-group">
                                    <span className="input-group-text">&#8377;</span>
                                    <input 
                                    type="number" 
                                    className="form-control" 
                                    id="miscExpenses"
                                    aria-label="Amount in Rupees (with dot and two decimal places)"
                                    placeholder="0"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <div className="card shadow" style={{ width: '50em' }}>
                    <div className="card-body">
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="button">Calculate SmartFinance</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}