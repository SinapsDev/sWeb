import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import './index.css'

export const NavLink:any = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

const Navbar: React.FC = () => {
    return (
        <>
          <nav className="navbar">
              <NavLink to='/' className='navbar'>
                <h1>Server Name</h1>
              </NavLink>
              <FaBars className='navbar-bars'/>
              <div className='navbar-navmenu'>
                  <NavLink className = 'navbar-navbutton' to='/about'>
                  About
                  </NavLink>
                  <NavLink className = 'navbar-navbutton' to='/services'>
                    Services
                  </NavLink>
                  <NavLink className = 'navbar-navbutton' to='/contact-us'>
                    Contact Us
                  </NavLink>
                  <NavLink className = 'navbar-navbutton' to='/sign-up'>
                    Sign Up
                  </NavLink>
              </div>
              <nav className='navbar-navbtn'>
                <NavLink className = 'navbar-navbtnlink' to = '/signin'>
                  Sign In
                </NavLink>
              </nav>
          </nav>
        </>
    )
}

export default Navbar;