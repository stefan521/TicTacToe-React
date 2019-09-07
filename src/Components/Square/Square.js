import React from 'react';

export default function Square(props) {
  return (
    <button className="square" onClick={props.onClick}
      style={{background: props.color}}>
      {props.value}
    </button>
  );
}
