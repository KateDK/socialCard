import React from 'react';

function List(props) {
  const { title, url, author } = props.list;
  return (
    <div>
      <h1>user card</h1>
      <h3>{title}</h3>
      <p src={url}>{url}</p>
      <h6>{author}</h6>
    </div>
  );
}

export default List;
