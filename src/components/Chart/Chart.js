import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const totalValue = props.datasets.map((dataset) => dataset.value);
  const maximumValue = Math.max(...totalValue);

  return (
    <div className="chart">
      {props.datasets.map((dataset) => (
        <ChartBar
          key={dataset.label}
          value={dataset.value}
          label={dataset.label}
          maxValue={maximumValue}
        />
      ))}
    </div>
  );
};
export default Chart;
