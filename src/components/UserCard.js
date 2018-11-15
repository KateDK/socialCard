import React from 'react';
import UserTheme from './UserTheme';

function UserCard(props) {
  const { name, image, theme } = props.user;

  return (
    <div className="userCard">
      <UserTheme theme={theme} />
      <img className="userImage" alt={`${name} avatar`} src={image} />
      <h3 className="userName">{name}</h3>
    </div>
  );
}

export default UserCard;
