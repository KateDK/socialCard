import React from 'react';

function Card(props) {
  const { name, image, quote } = props.user;
  return (
    <div>
      <h1>user card</h1>
      <h3>{name}</h3>
      <div>
        <p>{quote[0]}</p>
        <h6>{quote[1]}</h6>
      </div>
      <img alt="Smiling girl catching a snowflake" src={image} />
    </div>
  );
}

export default Card;
