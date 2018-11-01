import React from 'react';

function List(props) {
  const { name, image, quote } = props.list;
  return (
    <div className="userCard">
      <h1>user card</h1>
      <h3>{name}</h3>
      <div className="userQuote">
        <p>{quote}</p>
      </div>
      <img
        alt="Smiling girl catching a snowflake"
        src={image}
        className="userImage"
      />
    </div>
  );
}

export default List;
