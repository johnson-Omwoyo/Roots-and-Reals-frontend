import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className=" container-fluid ">
      <div className="row">
        <div className="col p-0 m-md-5">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="img-fluid rounded"
          />
        </div>
      </div>
      <div className="row first-div my-5">
        <div className="col">
          <div className="container px-0 mb-5">
            <div className="row ">
              <div className="col-12 col-md-5 p-0 mb-3">
                <img
                  className="img img-fluid rounded"
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="col-12 col-md-7 text-center  ">
                <h1 className="display-5">
                  <span style={{ color: "#e56b30" }}>Nurturing</span> our{" "}
                  <span style={{ color: "#4a7c2d" }}>planet</span>:<br /> A call
                  of action
                </h1>{" "}
                <p>
                  As stewards of the Earth, we hold the responsibility to
                  protect and preserve our environment for future generations.
                  Every action, no matter how small, contributes to the health
                  of our planet. By embracing sustainable practices—reducing
                  waste, conserving water, and supporting local ecosystems—we
                  can make a profound impact. Let’s cultivate a culture of
                  environmental awareness, inspiring others to join in our
                  efforts. Together, we can restore balance to nature, ensuring
                  that the beauty and resources of our world remain vibrant and
                  available for all. Join us in this vital journey to nurture
                  our planet and create a healthier, greener future!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row second-div">
        <div className="col">
          <div className="container">
            <div className="row py-5">
              <div className="col-12 col-md-3"></div>
              <div className="col text-center py-5">
                {" "}
                <h1 className="display-5">
                  <span style={{ color: "#e56b30" }}>Nurturing</span> our{" "}
                  <span style={{ color: "#4a7c2d" }}>planet</span>:<br /> A call
                  of action
                </h1>{" "}
                <p>
                  we are dedicated to promoting a greener future by offering
                  high-quality native trees that restore ecosystems and enhance
                  our environment. With every purchase, we provide expert
                  training to help you care for your trees, ensuring their
                  healthy growth. Plus, enjoy free delivery on orders of ten or
                  more trees. Join us in making a lasting impact—plant a tree
                  today and contribute to a sustainable tomorrow!
                </p>
                <p>
                  <NavLink to={"/about"} style={{ color: "#e56b30" }}>
                    learn more &gt;
                  </NavLink>{" "}
                </p>
              </div>
              <div className="col-12 col-md-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row third-div my-5">
        <div className="col">
          <div className="container px-0 mb-5">
            <div className="row py-5 ">
              <div className="col-12 col-md-5 p-0 mb-3">
                <img
                  className="img img-fluid rounded"
                  src="https://virtual-peaker.com/wp-content/uploads/2022/04/iStock-1135253768.jpg"
                  alt=""
                />
              </div>
              <div className="col-12 col-md-7 text-center  ">
                <h1 className="display-5">Sustainable Choices:</h1>{" "}
                <p>
                  Support biodiversity by choosing native tree species that
                  thrive in our environment. Each tree purchased helps restore
                  habitats and combat climate change.
                </p>
                <button
                  style={{ background: "#4a7c2d", color: "#f5f5dc" }}
                  className="btn"
                >
                  View Nursery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
