import React from "react";

import Navbar from "react-bootstrap/Navbar";

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <Navbar expand="lg" className="d-flex justify-content-end">
        <div className="me-2">
          <div
            id="kebab"
            className="mt-3 me-3"
            onClick={() => {
              props.settings();
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
