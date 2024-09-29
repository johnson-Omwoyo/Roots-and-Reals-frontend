import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <div className="container-fluid">
      <div className="header row">
        <div className="col p-4">
          <h1 className="text-center display-3 ">Reach us </h1>
          <p className="text-center">Home/Contact Us</p>
        </div>
      </div>
      <div className="row">
        <div className="col only p-5">
          <div class="overlay-content container md-rounded  p-5">
            <div className="row">
              <div className="col-12 col-md-6 d-flex align-items-center">
                <img
                  className="img-fluid rounded "
                  src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="col">
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div class="mb-3 mt-3">
                    <label for="comment">Message:</label>
                    <textarea
                      class="form-control"
                      rows="5"
                      id="comment"
                      name="text"
                    ></textarea>
                  </div>
                  <div class="mb-3 form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Receive news on your email
                    </label>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
