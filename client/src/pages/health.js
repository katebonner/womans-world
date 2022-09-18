import React from 'react';
import Auth from '../utils/auth';


const Health = () => {

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div>
        {loggedIn && (
          <div>
            <h1 class='text'> logged in and viewing health content</h1>
          </div>
        )}
        {!loggedIn && (
          <h1 class='text'> logged out and viewing health content</h1>
        )}
      </div>
    </main>
  );
};

export default Health;
