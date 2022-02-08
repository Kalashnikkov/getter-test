import React from 'react';
import {Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto'

function formatData (input) {

}

export default (orders) => ({
  render() {
    return (
      <div>
        {/* <Line
          data={formatData(orders.orders)}
          width={400}
          height={200}
          options={{
            maintainAspectRatio: true
          }}
        /> */}
        {orders.orders[0].nsw}
      </div>
    );
  }
});