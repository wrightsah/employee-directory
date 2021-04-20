import React from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";


function EmployeeCardList({ data }) {
  return data.map((employee) => (
    <EmployeeCard
      key={employee.id.value}
      picture={employee.picture.large}
      firstName={employee.name.first}
      lastName={employee.name.last}
      country={employee.location.country}
      email={employee.email}
      phone={employee.phone}
    />
  ));
}

export default EmployeeCardList;
