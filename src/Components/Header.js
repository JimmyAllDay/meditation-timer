import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <Navbar expand="lg" className="d-flex justify-content-end">
        <div className="me-2">
          <Link to="/settings">
            <Button className="btn-dark" type="button">
              Settings
            </Button>
          </Link>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
