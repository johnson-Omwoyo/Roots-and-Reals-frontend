import React, { useState } from "react";
import "./Bottom.css";
import { NavLink } from "react-router-dom";

export default function Botton() {
  const [selected, setSelected] = useState("home");
  const handleSelected = (value) => {
    setSelected(value.id);
    console.log(selected);
  };
  return (
    <div className="container-fluid ">
      <div className="row row1 ">
        <div className="col">
          <div className="container">
            <div className="row p-5">
              <div className="col-12 d-flex align-items-center justify-content-center col-md-4 my-3 bottoms">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      {" "}
                      <h2>quick links</h2>
                    </div>
                    <div className="col">
                      {" "}
                      <ul>
                        <li className="nav-item ">
                          <NavLink
                            className="nav-link"
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
                        <li className="nav-item">
                          <NavLink
                            className={"nav-link"}
                            to={"about"}
                            id="about"
                          >
                            About
                          </NavLink>
                        </li>
                        <li className="nav-item ">
                          <NavLink
                            className={"nav-link"}
                            to={"contact"}
                            id="contact"
                          >
                            Contact Us
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-center col-md-4 my-3e bottoms">
                {" "}
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      {" "}
                      <h2>contact us</h2>
                    </div>
                    <div className="col">
                      {" "}
                      <ul>
                        <li>
                          {" "}
                          <i className="fa-brands fa-facebook mx-3"></i>
                        </li>
                        <li>
                          {" "}
                          <i className="fa-brands fa-x-twitter mx-3"></i>{" "}
                        </li>
                        <li>
                          {" "}
                          <i className="fa-brands fa-linkedin mx-3"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-center col-md-4 my-3 bottoms">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      {" "}
                      <h2>Reach the developer</h2>
                    </div>
                    <div className="col">
                      {" "}
                      <ul>
                        <li>
                          {" "}
                          <div className="currency rounded-pill p-1 ">
                            <button
                              class="btn donate rounded-pill py-1 p5-1"
                              data-bs-target="#reach-developer"
                              data-bs-toggle="modal"
                            >
                              <i class="fa-brands fa-java"></i>{" "}
                            </button>
                          </div>
                        </li>
                        <li>
                          {" "}
                          <i class="fa-brands fa-square-github mx-3"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row p-4">
        <div className="col-12 text-center mb-2 ">
          {" "}
          © 2024 Roots And Realms. All rights reserved.
        </div>
        <div className="col text-center">
          <i className="fa-brands fa-facebook mx-3"></i>
          <i className="fa-brands fa-x-twitter mx-3"></i>{" "}
          <i className="fa-brands fa-linkedin mx-3"></i>
        </div>
      </div>
    </div>
  );
}
