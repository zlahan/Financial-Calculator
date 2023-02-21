import React, { Component } from 'react'
import  './Calculate.css';

export default class Calculate extends Component {
  constructor(props){
    super(props)
    this.state={
      ccbal:'', 
      ccapr:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { ccbal, ccapr} = this.state;
    console.log(ccbal, ccapr);
    fetch("http://localhost:5000/financialdata", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        ccbal, 
        ccapr
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
        <h2> Credit Card </h2>
          <label for="bal"> Balance </label>
          <input type="text" id="bal" name="ccbal" placeholder="Enter Balance"
          onChange={(e) => this.setState({ ccbal: e.target.value })}/><br />
          <label for="apr"> APR </label>
          <input type="text" id="apr" name="ccapr" placeholder="Enter APR"
          onChange={(e) => this.setState({ ccapr: e.target.value })}/><br />
          <br />
        <button type="submit">
            Submit
          </button>
      </form>
    )
  }

}
