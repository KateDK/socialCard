import React from 'react';
import DashboardProfileCard from './DashboardProfileCard';

function LeftSide(props) {
  if (!props.user) {
    return <h1>No Data</h1>;
  }
  return (
    <div className="leftSide">
      <DashboardProfileCard user={props.user} />
    </div>
  );
}

export default LeftSide;
