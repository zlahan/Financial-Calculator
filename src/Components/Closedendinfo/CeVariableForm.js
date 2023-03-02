import * as React from "react";
import defaultState from "./defaultState";

function VariablesForm({ onUpdate }) {
  const [state, setState] = React.useState(defaultState);

  const { initialAmount, period, apr} = state;

  return (
    <section><br />
      <h2>Financials</h2>
      <div className="flex">
        <label htmlFor="initialAmount">
          Initial Amount ($)
          <input
            type="number"
            id="initialAmount"
            name="initialAmount"
            value={initialAmount}
            onChange={({ target }) => setState({ ...state, initialAmount: Number(target.value) })}
          /><br /><br />
        </label>
        <label htmlFor="period">
          Loan Term (Years)
          <input
            type="number"
            id="period"
            name="period"
            value={period}
            onChange={({ target }) => setState({ ...state, period: Number(target.value) })}
          /><br /><br />
        </label>
        <label htmlFor="apr">
          APR (%)
          <input
            type="number"
            id="apr"
            name="apr"
            value={apr}
            onChange={({ target }) => setState({ ...state, apr: Number(target.value) })}
          /><br /><br />
        </label>
        {/* <label htmlFor="monthlyContribution">
          Monthly Contribution ($) (Optional)
          <input
            type="number"
            id="monthlyContribution"
            name="monthlyContribution"
            value={monthlyContribution}
            onChange={({ target }) =>
              setState({ ...state, monthlyContribution: Number(target.value) })
            }
          />
        </label> */}
      </div>
      <button type="button" onClick={() => onUpdate(state)}>
        Update Chart
      </button><br /><br />
    </section>
  );
}

export default VariablesForm;