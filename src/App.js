import "./App.css";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import ExampleCard from "./components/ExampleCard/ExampleCard";

import employees from "./employees.json";

function App() {
  // ? is it working?
  console.log(employees.results[0].name.first);
  console.log(employees.results[0].picture.large);
  return (
    <Wrapper>
      <Title>Employee Directory</Title>
      {/* This component is only for development */}
      <ExampleCard />
      {/* This component displays one employee */}
      <EmployeeCard
        picture={employees.results[0].picture.large}
        firstName={employees.results[0].name.first}
        lastName={employees.results[0].name.last}
        location={employees.results[0].location.country}
        email={employees.results[0].email}
        phone={employees.results[0].phone}
      />

      {/* Loop through entire employees array */}
      {employees.results.map((employee) => (
        <EmployeeCard
          picture={employee.picture.large}
          firstName={employee.name.first}
          lastName={employee.name.last}
          location={employee.location.country}
          email={employee.email}
          phone={employee.phone}
        />
      ))}
    </Wrapper>
  );
}

export default App;
