import React from 'react';
import Card from './Card';

function List(props) {
  const { users } = props.userList;
  //console.log(users);
  //console.log(props.userList);

  return (
    <div>
      {props.userList.map(item => (
        <Card key={item.id} user={item} />
      ))}
    </div>
  );
  //return <Card user={props} />;
}

export default List;
