import React from 'react';

function Card(props) {
  const { name, image, quote } = props.user;

  return (
    <div className="userCard">
      <img className="userImage" alt={`${name} avatar`} src={image} />
      <h3 className="userName">{name}</h3>
      {/* <span className="innerCard"> */}
      <p className="userQuote">{quote}</p>
      {/* </span> */}
    </div>
  );
}

export default Card;
