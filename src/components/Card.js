import React from 'react';

function Card(props) {
  const { name, image, quote } = props.user;

  return (
    <div className="userCard">
      <img className="userImage" alt={`${name} avatar`} src={image} />

      <h2>{name}</h2>

      <p>{quote}</p>
    </div>
  );
}

export default Card;
