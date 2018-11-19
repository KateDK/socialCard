import React from 'react';
// import UserTheme from './UserTheme';

function DashboardProfileCard(props) {
  const { name, image, theme } = props.user;

  return (
    <div className="dashboardProfileCard">
      <img className="theme" alt={`user theme`} src={theme} />
      <img className="userImage" alt={`${name} avatar`} src={image} />
      <h3 className="userName">{name}</h3>
      <div className="userNumbers">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </div>
  );
}

export default DashboardProfileCard;
