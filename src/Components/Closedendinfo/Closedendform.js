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

function ClosedEndChart({ initialAmount, period, apr }) {
  const data = React.useMemo(
    () => {
      const result = [];
      for (let i = 1; i <= period; i++) {
        let interestValue = initialAmount;
        if (result.length > 0) {
          interestValue = result[result.length - 1].value;
        }
        result.push({
          label: `${i}`,
          value: interestValue * (1 + apr/100 * period/12),
        });
      }
      return result;
    },
    [initialAmount, period, apr]
  );

  return (
    <><br />
      <h2>Projected Total Payment Amount </h2>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer>
          <LineChart 
            id="chart"
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
              <Label value="Years" offset={-3} position="insideBottom" />
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

export default ClosedEndChart;