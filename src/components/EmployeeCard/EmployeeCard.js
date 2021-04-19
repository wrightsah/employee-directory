import React from "react";
import "./style.css";

// ? What data do we want to show about each employee?
// picture, name.first, name.last, location.city, email, phone

function EmployeeCard({picture, firstName, lastName, country, email, phone}) {
  // console.log("the image URL is " + props.picture);
  return (
    <div className="card rounded">
      <div className="img-container">
        <img alt="sofiaturner" src={picture} />
      </div>
      <div className="content rounded">
        <ul>
          <li>
            <strong>First Name:</strong> {firstName}
          </li>
          <li>
            <strong>Last Name:</strong> {lastName}
          </li>
          <li>
            <strong>Location:</strong> {country}
          </li>
          <li>
            <strong>Email:</strong> {email}
          </li>
          <li>
            <strong>Phone:</strong> {phone}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
