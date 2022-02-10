import React from 'react';

export default (props) => ({
    render() {
      return (
        <div class="border-solid border-2 border-black rounded px-6 py-6 flex flex-col text-center w-3/12">
            <p class="sm:text-xl md:text-2xl lg:text-3xl uppercase my-2 font-light text-gray-500">
                {props.label}
            </p>
            <p class="sm:text-2xl md:text-4xl lg:text-6xl font-bold">
                {props.data}
            </p>
        </div>
      );
    }
  });