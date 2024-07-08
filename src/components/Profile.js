import React from 'react';
function Profile({ name, photo }) 
{
  return (
    <div>
      <img src={photo} alt={`${name}'s profile`} />
      <h1>{name}</h1>
    </div>
  );
}
export default Profile;