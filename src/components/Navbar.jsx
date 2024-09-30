/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect, useCallback, useRef } from 'react';
import logo from './logo.png';
import './Navbar.css';
import classNames from 'classnames';

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const btnRef = useRef();
  const toggle = useCallback(() => {
    // Prevents scrolling when sidebar is open
    if (sidebar) {
      window.onscroll = function () {};
    } else if (!sidebar) {
      var x = window.scrollX;
      var y = window.scrollY;
      window.onscroll = function () {
        window.scrollTo(x, y);
      };
    }
    setSidebar(!sidebar);
  }, [sidebar]);
  useEffect(() => {
    // Closes sidebar when escape key is pressed
    const keyPress = (e) => {
      if (e.key === 'Escape' && sidebar) toggle();
    };
    document.addEventListener('keydown', keyPress, false);

    return () => {
      document.removeEventListener('keydown', keyPress, false);
    };
  }, [toggle, sidebar]);
  useEffect(() => {
    // Closes dropdown when clicking outside of it
    const closeDropdown = (e) => {
      if (
        e.target &&
        !e.target.contains(btnRef.current) &&
        e.target.className !== 'dropdown-links'
      )
        setDropdown(false);
    };
    document.body.addEventListener('click', closeDropdown);
    return () => document.body.removeEventListener('click', closeDropdown);
  }, [dropdown]);
  return (
    <>
      <div
        className={classNames('tint', { 'active-tint': sidebar })}
        onClick={toggle}
      />
      <div className={classNames('sidebar', { active: sidebar })}>
        <ul className='sidebar-links'>
          <li>
            <a href='/about'>HOME</a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href='/sources'>US</a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href='/purpose'>WHY</a>
          </li>
        </ul>
      </div>
      <div
        className={classNames('sidecover', {
          'sidecover-active': sidebar,
        })}
      />
      <div className='ghost' />
      <nav>
        <a href='/' className='logo-link' aria-label='Logo'>
          <img className='logo' src={logo} alt='' height='50' width='100' />
        </a>
        <div className='nav-container'>
          <div className='nav-link-center'>
            <ul className='nav-links'>
              <li>
                <a href='/'>Voting</a>
              </li>
              <li>
                <a href='/explore'>Explore</a>
              </li>
              <li>
                <a href='/learn-more'>Learn</a>
              </li>
            </ul>
          </div>
          <button
            className={classNames('burger', {
              'active-burger': sidebar,
            })}
            onClick={toggle}
            aria-label='Access sidebar'
          >
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </button>
        </div>
      </nav>
    </>
  );
}
