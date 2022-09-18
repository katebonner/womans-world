import React from 'react';
import Auth from '../utils/auth';



const Work = () => {

  const loggedIn = Auth.loggedIn();

  const posts = [
    { 
        title: 'post 1',
        image: 'image1',
        description: 'description 1',
    },
    { 
      title: 'post 2',
      image: 'image1',
      description: 'description 2',
    },
    { 
      title: 'post 3',
      image: 'image1',
      description: 'description 3',
    },
    { 
      title: 'post 4',
      image: 'image1',
      description: 'description 4',
    }
    ];

  return (
    <main>
      <div>
        {loggedIn && (
          <div class='work-container'>
            {posts.map((post)=> (
              <div class='post-container'>
                <img src={require(`../assets/${post.image}.png`).default} alt='post' class='work-img'/>
                <h2>{post.title}</h2>
                <h4>{post.description}</h4>
              </div>
            ))}
          </div>
        )}
        {!loggedIn && (
          <>
          <><h1 class='authenticationHeading'>please log in to have full access to every blog post</h1></>
          <div class='work-container'>
            {posts.map((post)=> (
              <div class='post-container'>
              <img src={require(`../assets/${post.image}.png`).default} alt='post' class='work-img'/>
              <h2>{post.title}</h2>
              <h4>{post.description}</h4>
            </div>
            ))}
          </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Work;
