import React from 'react';

function Card(props) {
  const { name, image, quote } = props.user;

  return (
    <div className="userCard">
      <h2>{name}</h2>
      <div className="userQuote">
        <p>{quote}</p>
      </div>
      <img alt={`${name} avatar`} src={image} className="userImage" />
    </div>
  );
}

export default Card;
