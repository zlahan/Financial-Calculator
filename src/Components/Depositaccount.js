import React, { Component } from 'react'

export default class Depositaccount extends Component {
  render() {
    return (
      <form>
        <h3> Deposit Account </h3>

        <div>
          <label>Deposit Amount: </label>
          <input
            type="Deposit Amount"
            placeholder="Enter Deposit Amount"
          />
        </div>

        <div>
          <label>APY: </label>
          <input
            type="APY"
            placeholder="Enter APY"
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