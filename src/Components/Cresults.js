import React, { Component } from 'react';
import './Home.css';
import Data from "./data.json"

import { NavLink } from 'react-router-dom';

// export default class Closedend extends Component {

  function App() {    
  return (
          <div>
                {/* The section below is for the body of the homepage */}
                <html>
                  <head>
                    <title>Financial Calculadora</title>
                    <link rel="stylesheet" href="styles/styles.css" />
                    <script async src="./javascript/index.js"></script>
                  </head>
                  
                  <body >
                    <br />
                    <h1>This is a Financial Calculator for calculating different things</h1>
                    <br />
                    <h2>This program will be used to calculate loans, CDs, Credit Cards, and Mortgages</h2>
                    <h2>You will also get a visual representation of how your finances will look in x time</h2>
                    <br />
                    <h2>Below, you will see boxes for Closed End, Credit Card, Deposit Account, Mortgage calculators</h2>
                    <br />
                    <h2>Clicking each of the links will open the respective calculator</h2>
                    <br />
                    <h2>This program is a work-in-progress, and lots of styling and functionalities</h2>
                    <h2>are subject to change at any time. Thank you!</h2>
                    <br />

                    <div className= "rectangle">
                      <div className="App">
                        <div className="posts">
                            { Data.map(post => {
                                return (
                                    <>
                                    <br /><br /><br /><br />
                                    <h2> { post.title } </h2>
                                    <p> { post.content } </p>
                                    </>
                                )
                            })}
                        </div>
                      </div>
                    </div>

                    <div className= "rectangle">
                      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                      <h1>Credit Card</h1>
                      <br /><br /><br />
                      <h2>This box is for Credit Cards, click the</h2>
                      <h2>button below to open the calculator.</h2>
                      <br /><br /><br /><br />
                      <NavLink to="/CreditCard"><button onClick = "#Creditcard" class = "button"> 
                            Click here for the Credit Card Calculator</button></NavLink>
                    </div>

                    <div className= "rectangle">
                      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                      <h1>Deposit Account</h1>
                      <br /><br /><br />
                      <h2>This box is for Deposit Accounts, click the</h2>
                      <h2>button below to open the calculator.</h2>
                      <br /><br /><br /><br />
                      <NavLink to="/DepositAccount"><button onClick = "#Depositaccount" class = "button"> 
                            Click here for the Deposit Account Calculator</button></NavLink>
                    </div>

                    <div className= "rectangle">
                      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                      <h1>Mortgage Loan</h1>
                      <br /><br /><br />
                      <h2>This box is for Mortgages, click the</h2>
                      <h2>button below to open the calculator.</h2>
                      <br /><br /><br /><br />
                      <NavLink to="/Mortgage"><button onClick = "#Mortgage" class = "button"> 
                            Click here for the Mortgage Calculator</button></NavLink>
                    </div>

                  </body>    
                </html>
          </div>
    );
  }
// }

export default App;