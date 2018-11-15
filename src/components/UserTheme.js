import React from 'react';

function UserTheme(props) {
  console.log(props);
  return (
    <div>
      <h1>User Theme Image</h1>
      <img alt={`user theme`} src={props.theme} />
    </div>
  );
}

export default UserTheme;
