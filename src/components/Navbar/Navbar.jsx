/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect, useCallback } from "react";
import "./Navbar.css";
import classNames from "classnames";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

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
      if (e.key === "Escape" && sidebar) toggle();
    };
    document.addEventListener("keydown", keyPress, false);

    return () => {
      document.removeEventListener("keydown", keyPress, false);
    };
  }, [toggle, sidebar]);

  return (
    <>
      <div
        className={classNames("tint", { "active-tint": sidebar })}
        onClick={toggle}
      />
      <div className={classNames("sidebar", { active: sidebar })}>
        <ul className="sidebar-links">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href="/us">US</a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href="/learn">LEARN</a>
          </li>
        </ul>
      </div>
      <div
        className={classNames("sidecover", {
          "sidecover-active": sidebar,
        })}
      />
      <div className="ghost" />
      <nav>
        <a href="/" className="logo-link" aria-label="Logo">
          <img
            alt="FutureVoice logo"
            className="logo"
            src="/logo/logo_black.png"
          />
        </a>
        <div className="nav-container">
          <div className="nav-link-center">
            <ul className="nav-links">
              <li>
                <a href="/bills">Bills</a>
              </li>
              <li>
                <a href="/explore">Explore</a>
              </li>
              <li>
                <a href="/why">Why</a>
              </li>
            </ul>
          </div>
          <button
            className={classNames("burger", {
              "active-burger": sidebar,
            })}
            onClick={toggle}
            aria-label="Access sidebar"
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </button>
        </div>
      </nav>
    </>
  );
}
