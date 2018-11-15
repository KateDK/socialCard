import React from 'react';
import Card from './Card';

function LeftSide(props) {
  console.log('props ', props.user);
  if (!props) {
    return <h1>No Data</h1>;
  }

  return (
    <div>
      <h1>some content</h1>
    </div>
  );
}

export default LeftSide;
