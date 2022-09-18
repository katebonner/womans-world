import React from 'react';
import Auth from '../utils/auth';


const Style = () => {

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div>
        {loggedIn && (
          <div>
            <h1 class='text'> logged in and viewing style content</h1>
          </div>
        )}
        {!loggedIn && (
          <h1 class='text'> logged out and viewing style content</h1>
        )}
      </div>
    </main>
  );
};

export default Style;
