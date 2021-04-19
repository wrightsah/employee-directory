import "./App.css";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";

import EmployeeCardList from "./components/EmployeeCardList/EmployeeCardList";

import employees from "./employees.json";

console.log(employees);

function App() {
  // ? is it working?
  // console.log(employees.results[0].name.first);
  // console.log(employees.results[0].picture.large);

   function handleSortAZ() {
    console.log("handleSortAZ");
  }

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
      {/* This component displays one employee */}
      {/* <EmployeeCard
        picture={employees.results[0].picture.large}
        firstName={employees.results[0].name.first}
        lastName={employees.results[0].name.last}
        location={employees.results[0].location.country}
        email={employees.results[0].email}
        phone={employees.results[0].phone}
      /> */}
      <Wrapper>
        <EmployeeCardList data={employees} />
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
