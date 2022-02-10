import React from 'react';

export default (props) => ({
    render() {
      return (
        <div>
            <p>
                {props.label}
                {props.data}
            </p>
        </div>
      );
    }
  });