import React from "react";
import "./style.css";

// ? What data do we want to show about each employee? 
// picture, name.first, name.last, location.city, email, phone

function EmployeeCard(props) {
  console.log('the image URL is ' + props.picture);
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="sofiaturner"
          src={props.picture}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>First Name:</strong> {props.firstName}
          </li>
          <li>
            <strong>Last Name:</strong> {props.lastName}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Phone:</strong> {props.phone}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
