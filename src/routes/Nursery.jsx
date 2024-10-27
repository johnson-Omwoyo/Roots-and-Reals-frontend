import React, { useEffect, useState } from "react";
import "./Nursery.css";
function Nursery() {
  const plantsUrl =
    "https://gist.githubusercontent.com/johnson-Omwoyo/99ab33eb99dc74be4696c1ff7f8a21b0/raw/b45ad67bdbf7bfa1b6284e03fd859d1c41bcadff/rootsandrealms.json";
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(plantsUrl);
        const meData = await response.json();
        setData(meData.plants);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  console.log(data.plants);

  return (
    <div className="container-fluid main-container">
      <div className="header row">
        <div className="col p-4">
          <h1 className="text-center display-3 ">Nursery</h1>
          <p className="text-center">Home/Nursery</p>
        </div>
      </div>
      <div className="row">
        <div className="col p-5"></div>
      </div>
      <div className="row ">
        <div className="col">
          <div className="container">
            <div className="row">
              {data &&
                data.map((plant) => (
                  <div className="col-6 col-md-3 product ">
                    <div className="" style={{ width: "12rem" }}>
                      <img
                        src="https://images.unsplash.com/photo-1632230151484-ea0ab9ca0f49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNlZWRsaW5nc3xlbnwwfHwwfHx8MA%3D%3D"
                        className=" img-fluid rounded px-2"
                        alt="..."
                      />
                      <div className="align-items-center justify-content-center d-flex">
                        <div className="button-div">
                          <button className="btn btn-on-product  mx-1 ">
                            <i class="fa-solid fa-cart-shopping"></i>{" "}
                          </button>
                          <div className="button-hover rounded">purchase</div>
                        </div>
                        <div className="button-div">
                          <button
                            className="btn btn-on-product  mx-1"
                            data-bs-target="#tree-details"
                            data-bs-toggle="modal"
                          >
                            <i class="fa-solid fa-circle-info"></i>
                          </button>
                          <div className="button-hover rounded">info</div>
                        </div>
                      </div>

                      <div className="card-body text-center">
                        <h5 className="card-title tree-name">{plant.name} </h5>
                        <p className="card-text category "> {plant.category}</p>
                        <p className="cost card-text ">KShs {plant.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nursery;
