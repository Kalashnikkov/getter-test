import React from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto'

function formatData (input) {
  // Data already comes in correct format - throw it into react-chartJS
  const labels = input.labels
  const datasets = input.datasets
  return {
    labels,
    datasets
  }
}

export default (revenue) => ({
  render() {
    return (
        <Line
          data={formatData(revenue.revenue)}
          width={400}
          height={200}
          options={{
            // Needed to make sure the graph doesn't unnecessarily grow indefinitely
            // Also remove the legend as it is not passed through the component else 'undefined' is shown - looks cleaner
            maintainAspectRatio: true,
            plugins: {
              legend: false
            }
          }}
        />
    );
  }
});