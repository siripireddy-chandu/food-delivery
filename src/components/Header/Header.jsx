import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/pizzas",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  const isActive = (path) => {
    return window.location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header__inner">
        <Container>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo" onClick={() => navigate("/home")}>
              <img src={logo} alt="logo" />
              <h5>pedarasi peddamma vantillu</h5>
            </div>

            {/* Navigation Menu */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div
                className="menu d-flex align-items-center gap-5"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="header__closeButton">
                  <span onClick={toggleMenu}>
                    <i className="ri-close-fill"></i>
                  </span>
                </div>
                {nav__links.map((item, index) => (
                  <Link
                    to={item.path}
                    key={index}
                    className={`nav-link ${
                      isActive(item.path) ? "active__menu" : ""
                    }`}
                    onClick={toggleMenu}
                    style={{ textDecoration: "none" }} // This removes the underline
                  >
                    {item.display}
                  </Link>
                ))}
              </div>
            </div>

            {/* Cart and Mobile Menu Icons */}
            <div className="nav__right d-flex align-items-center gap-4">
              <span className="cart__icon" onClick={toggleCart}>
                <i className="ri-shopping-basket-line"></i>
                <span className="cart__badge">{totalQuantity}</span>
              </span>

              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
