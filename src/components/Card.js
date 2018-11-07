import React from 'react';

function Card(props) {
  const { name, image, quote } = props.user;

  return (
    <div className="userCard">
      <div className="innerUserCard">
        <img alt={`${name} avatar`} src={image} className="userImage" />
        <h2>{name}</h2>
      </div>
      <div className="userQuote">
        <p>{quote}</p>
      </div>
    </div>
  );
}

export default Card;
