import React, { useRef, useEffect } from "react";
import { Container, Row } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./header.css";

import logo from "../../assets/images/logo.png";
import userIcon from "../../assets/images/user-icon.png";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hook/useAuth";
const nav_links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const profileActionRef = useRef(null);

  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle("active_menu");

  const navigateToCart = () => {
    navigate("/cart");
  };

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show_profileActions");

  console.log(profileActionRef.current.classList);
  return (
    <>
      <header className="header" ref={headerRef}>
        <Container>
          <Row>
            <div className="nav_wrapper">
              <div className="logo">
                <img src={logo} alt="logo" />
                <div>
                  <h1>Store Front</h1>
                </div>
              </div>

              <div className="navigation" ref={menuRef} onClick={menuToggle}>
                <ul className="menu">
                  {nav_links.map((item, index) => (
                    <li className="nav_item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "nav_active" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="nav_icons">
                <span className="fav_icon">
                  <i className="ri-heart-line"></i>
                  <span className="badge">1</span>
                </span>
                <span className="cart_icon" onClick={navigateToCart}>
                  <i className="ri-shopping-cart-line"></i>
                  <span className="badge">{totalQuantity}</span>
                </span>

                <div className="profile">
                  <motion.img
                    whileTap={{ scale: 1.2 }}
                    src={currentUser ? currentUser.photoURL : userIcon}
                    alt="user-icon"
                    onClick={toggleProfileActions}
                  />

                  <div
                    className="profile_actions"
                    ref={profileActionRef}
                    onClick={toggleProfileActions}
                  >
                    {currentUser ? (
                      <span>Logout</span>
                    ) : (
                      <div>
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mob_menu">
                  <span onClick={menuToggle}>
                    <i className="ri-menu-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
