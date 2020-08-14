import React from "react";
import "../styles/index.css";

export default function Child(props) {
  return (
    <React.Fragment>
      <div class="container pt-80 pb-40 pt-160">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-4 mb-3 mb-lg-4">
            <div class="card border-0 shadow-box">
              <div class="card-body p-0">
                <div class="w-100 position-relative">
                  <img
                    class="img-fluid w-100"
                    src={props.background}
                    alt="child"
                  />
                  <img
                    class="img-fluid centered"
                    src={props.image}
                    alt="child"
                  />
                  <div class="d-flex align-items-center justify-content-between px-3 py-4">
                    <h6 class="mb-0">Child Name</h6>
                    <h6 class="mb-0">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-chevron-right"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
