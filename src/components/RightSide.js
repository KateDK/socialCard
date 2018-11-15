import React from 'react';
import Card from './Card';

function LeftSide(props) {
  console.log(props.user);
  // if (!props.user.name) {
  //   return <h1>No Data</h1>;
  // }
  return (
    <div>
      <h1>some content</h1>
      {/* <Card user={props.user} /> */}
    </div>
  );
}

export default LeftSide;
