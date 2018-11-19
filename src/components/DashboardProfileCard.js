import React from 'react';
// import UserTheme from './UserTheme';

function DashboardProfileCard(props) {
  const { name, image, theme, handle, tweets, folowers, folowing } = props.user;

  return (
    <div className="dashboardProfileCard">
      <div className="dashboardImages">
        <img className="theme" alt={`user theme`} src={theme} />
        <img className="userImage" alt={`${name} avatar`} src={image} />
      </div>
      <span className="userName">
        <h3>{name}</h3>
        <p className="userHandle">{`@${handle}`}</p>
      </span>
      <div className="userNumbers">
        <p>Tweets</p>
        <p>Followers</p>
        <p>Following</p>
        <p className="userNumbersItem">{tweets}</p>
        <p className="userNumbersItem">{folowers}</p>
        <p className="userNumbersItem">{folowing}</p>
      </div>
    </div>
  );
}

export default DashboardProfileCard;
