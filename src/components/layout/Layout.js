import React, { useEffect, createRef, useCallback, useState, useRef } from "react";
import { Link, animateScroll as Scroll } from "react-scroll";
import { Fade } from "react-reveal";
import "./style.css";

function Layout(props) {
  return <div className="layout">{props.children}</div>;
}

function ContentDiv(props) {
  return (
    <div
      className={"content " + (props.primary ? "primary-bg" : "secondary-bg")}
      id={props.id ?? "content-default-id"}
    >
      {props.children}
    </div>
  );
}

function NavigationSpacer(props) {
  return <div className="navigation-spacer" />;
}

function Navigation(props) {
  const duration = 500;
  const [offset, setOffset] = useState(78.48);
  const navRef = useRef(null);

  // update the offset for scroller spy
  useEffect(() => {
    setOffset(navRef.current.clientHeight);
  }, [navRef]);

  return (
    <div className="navigation" ref={navRef}>
      <nav className="navigation-menu">
        <img className="navigation-logo" src={props.logo} alt="logo" onClick={() => Scroll.scrollToTop()}/>
        <ul className="navigation-items">
          <li className="navigation-item">
            <Link
              activeClass="navigation-active-link"
              to="home"
              className="navigation-item-link"
              spy={true}
              smooth={true}
              offset={-offset}
              duration={duration}
            >
              Home
            </Link>
          </li>
          <li className="navigation-item">
            <Link
              activeClass="navigation-active-link"
              to="about"
              className="navigation-item-link"
              spy={true}
              smooth={true}
              offset={-offset}
              duration={duration}
            >
              About
            </Link>
          </li>
          <li className="navigation-item">
            <Link
              activeClass="navigation-active-link"
              to="projects"
              className="navigation-item-link"
              spy={true}
              smooth={true}
              offset={-offset}
              duration={duration}
            >
              Projects
            </Link>
          </li>
          <li className="navigation-item">
            <Link
              activeClass="navigation-active-link"
              to="contact"
              className="navigation-item-link"
              spy={true}
              smooth={true}
              offset={-offset}
              duration={duration}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <NavigationSpacer />
    </div>
  );
}

export { Layout, Navigation, ContentDiv };

export default {
  Navigation,
  ContentDiv,
};
