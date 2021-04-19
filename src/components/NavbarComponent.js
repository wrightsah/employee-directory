// This component for Navbar
import React from "react";

function NavbarComponent() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light" expand="large">
        <a class="navbar-brand">Employee Directory</a>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search by Location
          </button>
        </form>
      </nav>
    </div>
  );
}

export default NavbarComponent;
