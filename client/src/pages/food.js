import React from 'react';
import Auth from '../utils/auth';
import Veggie from '../components/foodContent/Veggie';
import Popular from '../components/foodContent/Popular'



const Food = () => {

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div>
        {loggedIn && (
          <div>
            <h1 class='text'> logged in and viewing food content</h1>
          </div>
        )}
        {!loggedIn && (
          <h1 class='text'> logged out and viewing food content</h1>
        )}
      </div>
    </main>
  );
};

export default Food;
