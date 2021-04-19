// This component for Navbar
import React from "react";
import "./style.css";


function NavbarComponent({handleSortAZ, handleSortLocation}) {
  return (
    <div>
      <nav className="navbar navbar-light bg-light nav-fill w-100" >
        <a className="navbar-brand" href='../public/index.html'>Employee Directory</a>
        <form className="form-inline">
          <input
            className="form-control mr-md-2"
            type="search"
            placeholder="Enter Location"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSortLocation}>
            Filter by Location
          </button>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleSortAZ}>
            Sort A-Z
          </button>
        </form>
      </nav>
    </div>
  );
}

export default NavbarComponent;
