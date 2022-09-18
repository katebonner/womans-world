import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Logo from '../../assets/womansworldLogo.svg';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div>
        <div class='login-logout-container'>
          <div class="navbar">
            <div class="container nav-container">
                <input class="checkbox" type="checkbox" />
                <div class="hamburger-lines">
                  <span class="line line1"></span>
                  <span class="line line2"></span>
                  <span class="line line3"></span>
                </div>  
              <div class="logo">
              </div>
              <div class="menu-items">
                <li><Link to="/health" class='navbar__content'>health</Link></li>
                <li><Link to="/nightlife" class="navbar__content">night life</Link></li>
                <li><Link to="/work" class="navbar__content">work</Link></li>
                <li><Link to="/style" class="navbar__content">style</Link></li>
                <li><Link to="/food" class="navbar__content">food</Link></li>
                <li><Link to="/media" class="navbar__content">media</Link></li>
                {Auth.loggedIn() ? (
                    <>
                    <li><a href="/" onClick={logout} class="login-logout">logout</a></li>
                    </>
                  ) : (
                    <>
                    <li><Link to="/login" class="login-logout">login</Link></li>
                    <li><Link to="/signup" class="login-logout">signup</Link></li>
                    </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div class='container'>
          <img class='logoIMG' src={Logo} alt='logo'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
