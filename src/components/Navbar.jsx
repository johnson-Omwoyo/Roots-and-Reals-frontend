import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Donation from "./Modals";
export default function Navbar() {
  const [selected, setSelected] = useState("home");
  const handleSelected = (value) => {
    setSelected(value.id);
    console.log(selected);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light top shadow-sm ">
      <div className="container navbrand">
        <NavLink className="navbar-brand p-0" to={"/"}>
          <img src="public/Screenshot from 2024-09-23 17-06-47.png" alt="" />
        </NavLink>

        <div
          className="navbar-toggler border-none rounded-pill py-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </div>
        <div
          className="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <a className="navbar-brand p-0" href="#">
              <img
                src="public/Screenshot from 2024-09-23 17-06-47.png"
                alt=""
              />
            </a>
            <button
              diplay-5
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body top">
            <ul className="navbar-nav flex-grow-1 justify-content-center pe-3 ">
              <li className="nav-item mx-md-4">
                <NavLink
                  className={
                    selected == "home" ? "nav-link selected" : "nav-link"
                  }
                  style={{ color: "#4a7c2d" }}
                  aria-current="page"
                  id="home"
                  to={"/"}
                  onClick={(event) => {
                    // console.log(event.target);
                    handleSelected(event.target);
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-md-4">
                <NavLink
                  className={
                    selected == "nursery" ? "nav-link selected" : "nav-link"
                  }
                  style={{ color: "#4a7c2d" }}
                  to={"nursery"}
                  id="nursery"
                  onClick={(event) => {
                    // console.log(event.target);
                    handleSelected(event.target);
                  }}
                >
                  Nursery
                </NavLink>
              </li>
              <li className="nav-item mx-md-4">
                <NavLink
                  className={
                    selected == "about" ? "nav-link selected" : "nav-link"
                  }
                  style={{ color: "#4a7c2d" }}
                  to={"about"}
                  id="about"
                  onClick={(event) => {
                    // console.log(event.target);
                    handleSelected(event.target);
                  }}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item mx-md-4">
                <NavLink
                  className={
                    selected == "contact" ? "nav-link selected" : "nav-link"
                  }
                  style={{ color: "#4a7c2d" }}
                  to={"contact"}
                  id="contact"
                  onClick={(event) => {
                    // console.log(event.target);
                    handleSelected(event.target);
                  }}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      
        <div>
          <div className="currency rounded-pill p-1 ">
            <button
              class="btn donate rounded-pill py-2"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
            >
              <i class="fa-solid fa-cart-shopping"></i>{" "}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
