import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto'

function formatData (input) {
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
      <div>
        <Bar
          data={formatData(revenue.revenue)}
          width={400}
          height={200}
          options={{
            maintainAspectRatio: true
          }}
        />
      </div>
    );
  }
});