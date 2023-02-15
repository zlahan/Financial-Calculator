import React, { Component } from "react";

export default class Userdetails extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userData: "",
    };
  }

	componentDidMount(){
		fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token:window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data,"userData");
        this.setState({userData: data.data});

        });
	}
  logOut=() =>{
    window.localStorage.clear();
    window.location.href="./sign-in"
  }
	render() {
    return (
        <div>
          <h1>Account Details</h1>
           <br /><hr /><br /> 
            Name: <h1>{this.state.userData.fname}</h1>
            Email: <h1>{this.state.userData.email}</h1><br/>
           <hr /><br /> 
          <h1>Closed End Loan</h1>
            Loan Amount: <h1>{this.state.userData.clamount}</h1>
            Loan Term: <h1>{this.state.userData.clterm}</h1>
            Interest Rate: <h1>{this.state.userData.cirate}</h1>
            Backend Cost: <h1>{this.state.userData.cbcost}</h1>
            <br />
          <h1>Credit Card</h1>
            Balance: <h1>{this.state.userData.ccbal}</h1>
            APR: <h1>{this.state.userData.ccapr}</h1>
            <br />
          <h1>Deposit Account</h1> 
            Deposit Amount: <h1>{this.state.userData.damt}</h1>
            APY: <h1>{this.state.userData.dapy}</h1>
            Term: <h1>{this.state.userData.dlterm}</h1>
            <br />
          <h1>Mortgage Loan</h1>
            Loan Amount: <h1>{this.state.userData.mlamount}</h1>
            Loan Term: <h1>{this.state.userData.mlterm}</h1>
            APR: <h1>{this.state.userData.mirate}</h1>
            BCost: <h1>{this.state.userData.mbcost}</h1>
            <br />
            <button onClick={this.logOut}>Log Out</button>
          </div>
        )
      }
}