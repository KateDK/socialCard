import React from 'react';
// import UserTheme from './UserTheme';

function DashboardProfileCard(props) {
  const { name, image, theme } = props.user;

  return (
    <div className="dashboardProfileCard">
      <img className="userImage" alt={`${name} avatar`} src={image} />
      <img classname="theme" alt={`user theme`} src={theme} />
      <h3 className="userName">{name}</h3>
    </div>
  );
}

export default DashboardProfileCard;
