import React from "react";
import "../styles/index.css";

export default function Button() {
  return (
    <React.Fragment>
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8 text-center">
          <div class="shadow-box rounded py-40 px-3">
            <h4 class="mb-2">Add another child</h4>
            <span class="d-block mb-4">
              You’ll need a class code from your teacher to get started.
            </span>
            <button class="btn btn-primary px-5 py-3 font-weight-bold add-button-width">
              Add Child
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
