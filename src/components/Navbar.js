import React from "react";
//import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#3366ff" }}
      >
        <h3>Estore</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto topnav">
            <li className="nav-item active">
              <select
                className="nav-link"
                value={props.value}
                onChange={(e) => props.handleChangeEvent(e)}
              >
                <option value="products">Select Category</option>
                <option value="9">Electronics</option>
                <option value="10">Jewelery</option>
                <option value="11">Men's clothing</option>
                <option value="12">Women's clothing</option>
                <option value="12">Women's clothing</option>
                <option value="12">Women's clothing</option>
                <option value="12">Women's clothing</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
