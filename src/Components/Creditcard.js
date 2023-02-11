import React, { Component } from 'react'

export default class Creditcard extends Component {
  render() {
    return (
      <form>
        <h3> Credit Card Payment </h3>

        <div >
          <label>Balance: </label>
          <input
            type="Balance"
            placeholder="Enter Balance"
          />
        </div>

        <div>
          <label>APR: </label>
          <input
            type="APR"
            placeholder="Enter APR"
          />
        </div>

        <div>
          <label>(optional) Late Payment: </label>
          <input
            type="Late Payment"
            placeholder="Enter any Late Payment"
          />
        </div>

        <div >
          <button type="submit">
            Submit
          </button>
        </div>
        
      </form>
    )
  }
}