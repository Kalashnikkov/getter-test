import React from 'react';

export default (props) => ({
    render() {
      return (
        <div class="border-solid border-2 border-black rounded px-16 py-6 flex flex-col text-center">
            <p class="text-3xl uppercase my-2 font-light text-gray-500">
                {props.label}
            </p>
            <p class="text-6xl font-bold">
                {props.data}
            </p>
        </div>
      );
    }
  });