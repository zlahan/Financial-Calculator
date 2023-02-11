import React, { Component } from 'react'

export default class Mortgage extends Component {
  render() {
    return (
      <form>
        <h3> Mortgage Calculator </h3>

        <div>
          <label>Loan Amount: </label>
          <input
            type="Loan Amount"
            placeholder="Enter Loan Amount"
          />
        </div>

        <div>
          <label>APR\: </label>
          <input
            type="APR"
            placeholder="Enter Loan Term"
          />
        </div>

        <div>
          <label>Interest Rate: </label>
          <input
            type="Interest Rate"
            placeholder="Enter Interest Rate"
          />
        </div>

        <div>
          <label>Loan Term: </label>
          <input
            type="Loan Term"
            placeholder="Enter Loan Term"
          />
        </div> 
        
        <div>
          <label>Backend Cost: </label>
          <input
            type="Backend Cost"
            placeholder="Enter Backend Cost"
          />
        </div>

        <div>
          <button type="submit">
            Submit
          </button>
        </div>
        
      </form>
    )
  }
}