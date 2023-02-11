import React, { Component } from 'react'

export default class Calculate extends Component {
  render() {
    return (
      
      <form> 
        <div>
          <form>
            <h3> Closed End Loan </h3>

              <div>
                <label>Loan Amount: </label>
                <input
                  type="Loan Amount"
                  placeholder="Enter Loan Amount"
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
                <label>Interest Rate: </label>
                <input
                  type="Interest Rate"
                  placeholder="Enter Interest Rate"
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
        </div>

        <div>
          <form>
            <h3> Credit Card Payment </h3>

              <div>
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
                  placeholder="Enter Late Payment"
                />
              </div>

              <div>
                  <button type="submit">
                  Submit
                  </button>
              </div>
            
          </form>
        </div>

        <div>
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
        </div>

        <div>
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
              <label>APR: </label>
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
        </div>
      </form>
    )
  }

}

