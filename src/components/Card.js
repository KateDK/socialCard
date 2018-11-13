import React from 'react';

function Card(props) {
  const { name, image, quote } = props.user;

  return (
    <div className="userCard">
      <img className="userImage" alt={`${name} avatar`} src={image} />
      <h3 className="userName">{name}</h3>
      <p className="userQuote">{quote}</p>
    </div>
  );
}

export default Card;
