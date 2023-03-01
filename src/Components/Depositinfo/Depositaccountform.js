import * as React from "react";
import {
  Label,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";


function renderTooltip({ payload }) {
  if (!payload[0]) {
    return;
  }

  return <span>{`$${payload[0].value.toFixed(2)}`}</span>;
}

function CompoundInterestChart({ initialAmount, period, apy, monthlyContribution }) {
  const data = React.useMemo(
    () => {
      const result = [];

      for (let i = 1; i <= period; i++) {
        let lastFutureValue = initialAmount + monthlyContribution * 12;
        if (result.length > 0) {
          lastFutureValue = result[result.length - 1].value + monthlyContribution * 12;
        }
        result.push({
          label: `${i}`,
          value: lastFutureValue * Math.pow(1 + apy / 100, 1)
        });
      }

      return result;
    },
    [initialAmount, period, apy, monthlyContribution]
  );

  return (
    <><br />
      <h2>Projected Growth</h2>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <LineChart
            width={400}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 50,
              left: 10,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label">
              <Label value="Years" offset={-4} position="insideBottom" />
            </XAxis>
            <YAxis />
            <Tooltip content={renderTooltip} />
            <Line type="monotone" dataKey="value" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default CompoundInterestChart;