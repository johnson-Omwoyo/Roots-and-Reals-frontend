import React from "react";
import { useEffect, useState } from "react";
import "./Donation.css";
export default function Donation() {
  return (
    <>
      <div>
        <div
          class="modal fade"
          id="reach-developer"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5">Digitise your services</h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                {" "}
                <a target="_blank" href="https://youtube.com">
                  get in touch{" "}
                </a>{" "}
                And make your services available online
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          class="modal fade"
          id="tree-details"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5">Digitise your services</h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">tree detailed</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
