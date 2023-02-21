import React, { Component } from 'react'
import  './Calculate.css';

export default class Calculate extends Component {
  constructor(props){
    super(props)
    this.state={
      mlamount:'', 
      mlterm:'',
      mirate:'',
      mbcost:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { mlamount, mlterm, mirate, mbcost} = this.state;
    console.log(mlamount, mlterm, mirate, mbcost);
    fetch("http://localhost:5000/financialdata", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ 
        mlamount, 
        mlterm,
        mirate,
        mbcost
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data,"FinancialData");
      });

  }
  
  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>

        <br />
        <h2> Mortgage Loan </h2>
          <label for="lamount"> Loan Amount </label>
          <input type="text" id="lamount" name="mlamount" placeholder="Enter Loan Amount"
          onChange={(e) => this.setState({ mlamount: e.target.value })}/><br />
          <label for="lterm"> Loan Term </label>
          <input type="text" id="lterm" name="mlterm" placeholder="Enter Loan Term (months)"
          onChange={(e) => this.setState({ mlterm: e.target.value })}/><br />
          <label for="irate"> Interest Rate </label>
          <input type="text" id="irate" name="mirate" placeholder="Enter Interest Rate"
          onChange={(e) => this.setState({ mirate: e.target.value })}/><br />
          <label for="bcost"> Backend Cost </label>
          <input type="text" id="bcost" name="mbcost" placeholder="Enter Backend Cost"
          onChange={(e) => this.setState({ mbcost: e.target.value })}/><br />
          <br />
          <button type="submit">
            Submit
          </button>
      </form>
    )
  }

}
