import React, { useState } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";

import EmployeeCardList from "./components/EmployeeCardList/EmployeeCardList";

import employees from "./employees.json";
// Test import
// console.log(employees);

function App() {
  // ? is it working?
  // hooks must be here at the top

  // set the initial state
  const [data, setEmployees] = useState(employees.results);
  // console.log(data);

  // function to sort by name
  function sortAZ() {
    setEmployees(data.sort((a, b) => (a.name.first > b.name.first ? 1 : -1)));
    return {data}
  }
  // function to handle sort
  function handleSortAZ() {
    console.log("handleSortAZ");
    // setEmployees(data => data.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1));
    sortAZ();
    console.log(data);
  }
  // function to filter by location
  function handleSortLocation() {
    console.log("handleSortLocation");
  }

  return (
    <div>
      <NavbarComponent
        handleSortAZ={handleSortAZ}
        handleSortLocation={handleSortLocation}
      />
      {/* <Title>Employee Directory</Title> */}
      {/* This component is only for development */}
      {/* <ExampleCard /> */}

      <Wrapper>
        <EmployeeCardList data={data} />
        {/* Loop through entire employees array */}
        {/* {employees.results.map((employee) => (
        <EmployeeCard
          key={employee.id.value}
          picture={employee.picture.large}
          firstName={employee.name.first}
          lastName={employee.name.last}
          country={employee.location.country}
          email={employee.email}
          phone={employee.phone}
        />
      ))} */}
      </Wrapper>
    </div>
  );
}

export default App;
