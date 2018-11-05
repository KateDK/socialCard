import React from 'react';
import Card from './Card';

function List(props) {
  console.log(props);
  if (!props.userList.length) {
    return <h1>No Users Available</h1>;
  }
  return (
    <div className="userList">
      {props.userList.map(item => (
        <Card key={item.id} user={item} />
      ))}
    </div>
  );
}

export default List;
