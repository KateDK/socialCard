import React from 'react';
import Card from './Card';
import UserTheme from './UserTheme';

function LeftSide(props) {
  if (!props.user) {
    return <h1>No Data</h1>;
  }
  // console.log('props ', props.user.name);

  return (
    <div>
      <h1>some content</h1>
      <UserTheme theme={props.user.theme} />
      <img
        className="userImage"
        alt={`${props.user.name} avatar`}
        src={props.user.image}
      />
      <h3 className="userName">{props.user.name}</h3>
    </div>
  );
}

export default LeftSide;
