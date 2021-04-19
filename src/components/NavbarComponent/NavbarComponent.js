// This component for Navbar
import React from "react";
import "./style.css";


function NavbarComponent() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light nav-fill w-100" >
        <a className="navbar-brand" href='../public/index.html'>Employee Directory</a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search by Location
          </button>
        </form>
      </nav>
    </div>
  );
}

export default NavbarComponent;
