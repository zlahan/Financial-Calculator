import React, { Component } from 'react'
import  './Calculate.css';

export default class Depositaccount extends Component {
  constructor(props){
    super(props)
    this.state={
      damt:'', 
      dapy:'', 
      dterm:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { damt, dapy, dterm} = this.state;
    console.log(damt, dapy, dterm);
    fetch("http://localhost:5000/financialdata", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        damt, 
        dapy, 
        dterm
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
        <h2> Deposit Account </h2>
          <label for="amt"> Amount </label>
          <input type="text" id="amt" name="damt" placeholder="Enter Deposit Amount"
          onChange={(e) => this.setState({ damt: e.target.value })}/><br />
          <label for="apy"> APY </label>
          <input type="text" id="apy" name="dapy" placeholder="Enter APY"
          onChange={(e) => this.setState({ dapy: e.target.value })}/><br />
          <label for="term"> Term </label>
          <input type="text" id="term" name="dterm" placeholder="Enter (optional) Term (months)"
          onChange={(e) => this.setState({ dterm: e.target.value })}/><br />
          <br />
          <button type="submit">
            Submit
          </button>
      </form>
    )
  }

}

