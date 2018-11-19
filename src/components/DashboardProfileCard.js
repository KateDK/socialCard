import React from 'react';
// import UserTheme from './UserTheme';

function DashboardProfileCard(props) {
  const { name, image, theme, handle } = props.user;

  return (
    <div className="dashboardProfileCard">
      <img className="theme" alt={`user theme`} src={theme} />
      <img className="userImage" alt={`${name} avatar`} src={image} />
      <span className="userName">
        <h3>{name}</h3>
        <p className="userHandle">{`@${handle}`}</p>
      </span>
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
