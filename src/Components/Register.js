import React, { Component } from 'react'

export default class Register extends Component {
  constructor(props){
    super (props)
    this.state={
      fname:"",
      lname:"",
      email:"",
      uname:"",
      password:""
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const {fname,lname, email,uname, password } = this.state;
    console.log(fname,lname,email,uname, password);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        uname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data,"userRegister");
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Register</h3>

        <div>
          <label>First Name: </label>
          <input
            type="firstName"
            placeholder="Enter First Name"
            onChange={(e)=>this.setState({ fname: e.target.value})}
          />
        </div>

        <div>
          <label>Last Name: </label>
          <input
            type="lastName"
            placeholder="Enter Last Name"
            onChange={(e)=>this.setState({ lname: e.target.value})}
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e)=>this.setState({ email: e.target.value})}
          />
        </div>

        <div>
          <label>Username: </label>
          <input type="username" placeholder="Enter Username" 
          onChange={(e)=>this.setState({ uname: e.target.value})}
          />

        </div>


        <div>
          <label>Password: </label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e)=>this.setState({ password: e.target.value})}
          />
        </div>

        <div>
          <button type="submit">
            Register Now
          </button>
        </div>
        <p>
          Already registered? <a href="/sign-in">sign in</a>
        </p>
      </form>
    )
  }
}