import React from 'react';
import {Line} from 'react-chartjs-2';
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
        <Line
          data={formatData(revenue.revenue)}
          width={400}
          height={200}
          options={{
            maintainAspectRatio: true
          }}
        />
    );
  }
});