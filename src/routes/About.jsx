import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="container-fluid">
        <div className="header row">
          <div className="col p-4">
            <h1 className="text-center display-3 ">Reason of existence </h1>
            <p className="text-center">Home/About</p>
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
                <div className="col-12 col-md-7 d-flex align-items-center justify-content-center ">
                  <div className="text-center">
                    <h1 className="display-5">Sustainable Choices:</h1>{" "}
                    <p>
                      Support biodiversity by choosing native tree species that
                      thrive in our environment. Each tree purchased helps
                      restore habitats and combat climate change.
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
      </div>
    </>
  );
}

export default About;
