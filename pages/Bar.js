import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto'

function formatData (input) {
  // Putting data into format of react-chartjs
  const labels = Object.keys(input)
  const rawData = Object.values(input)
  var datasets = []
  var obj = { data: rawData }
  datasets.push(obj)
  return {
    labels,
    datasets
  }
}


export default (orders) => ({
  render() {
    return (
        <Bar
          data={formatData(orders.orders[0])}
          width={400}
          height={200}
          options={{
            maintainAspectRatio: true,
            plugins: {
              legend: false
            }
          }}
        />
    );
  }
});