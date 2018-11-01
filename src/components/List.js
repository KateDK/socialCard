import React from 'react';
import Card from './Card';

function List(props) {
  return (
    <div>
      {props.userList.map(item => (
        <Card key={item.id} user={item} />
      ))}
    </div>
  );
}

export default List;
