import React from "react";
import "./style.css";

// ? What data do we want to show about each employee? 
// picture, name.first, name.last, location.city, email, phone

function EmployeeCard() {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="sofiaturner"
          src="https://randomuser.me/api/portraits/med/women/72.jpg"
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>First Name:</strong> Sofia
          </li>
          <li>
            <strong>Last Name:</strong> Turner
          </li>
          <li>
            <strong>Location:</strong> Bowral, Queensland, Australia
          </li>
          <li>
            <strong>Email:</strong> sofia.turner@example.com
          </li>
          <li>
            <strong>Phone:</strong> 07-5704-9750
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
