import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  let userNav;
  if (props.user) {
    userNav = (
      <nav className='userfooter'>
        <Link to="/create" className='button'>Create  Group</Link>
        <Link onClick={props.logout} className='button'>Log Out</Link>
      </nav>
    );
  }
  return (
    <footer>
      <section>
        {userNav}
        <nav>
          <a href='#'>Contact us</a>  |&nbsp;&nbsp;  
          <a href='#'>Terms of Services</a>  |&nbsp;&nbsp;
          <a href='#'>Privacy Policy</a>
        </nav>
      </section>
    </footer>
  );
};

export default Header;
