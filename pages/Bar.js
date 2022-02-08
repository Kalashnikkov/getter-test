import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto'

const data2 = {
  labels: ['11/12', '12/12', '13/12', '14/12'], // TODO: you'll need to loop through some dates here (I recommend date-fns)
  datasets: [
    {
      data: [8459,12924,10926,9652],  // Hint: Maybe you can format the Axes "ticks" so it returns a nice format? e.g. $8.4k
      borderColor: '#f58120',
      backgroundColor: '#f58120',
    }
  ]
}

function formatData (data) {
  console.log(data)
  console.log("HELLO")
  return data2
}

export default () => ({
  render() {
    return (
      <div>
        <Bar
          data={formatData()}
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