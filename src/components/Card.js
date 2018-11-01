import React from 'react';

function Card(props) {
  const { name, image, quote } = props.user;

  return (
    <div className="userCard">
      <h3>{name}</h3>
      <div className="userQuote">
        <p>{quote}</p>
      </div>
      <img alt={`${name} avatar`} src={image} className="userImage" />
    </div>
  );
}

export default Card;
