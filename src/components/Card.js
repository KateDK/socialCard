import React from 'react';

function Card(props) {
  const { name, image, quote } = props.user.list;
  return (
    <div className="userCard">
      <h1>user card</h1>
      <h3>{name}</h3>
      <div className="userQuote">
        <p>{quote}</p>
      </div>
      <img alt={`${name} avatar`} src={image} className="userImage" />
    </div>
  );
}

export default Card;
