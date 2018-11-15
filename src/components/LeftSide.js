import React from 'react';
import UserCard from './UserCard';

function LeftSide(props) {
  if (!props.user) {
    return <h1>No Data</h1>;
  }
  return (
    <div>
      <h1>some content</h1>
      <UserCard user={props.user} />
    </div>
  );
}

export default LeftSide;
