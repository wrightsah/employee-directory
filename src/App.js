import "./App.css";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import ExampleCard from "./components/ExampleCard/ExampleCard";

import employees from "./employees.json";

function App() {
  // ? is it working?
  console.log(employees.results[0].name.first);
  return (
    <Wrapper>
      <Title>Employee Directory</Title>
      {/* This component is only for development */}
      <ExampleCard />

      <EmployeeCard
        picture=""
        firstName={employees.results[0].name.first}
        lastName={employees.results[0].name.last}
        location={employees.results[0].location.country}
        email={employees.results[0].email}
        phone={employees.results[0].phone}
      />
    </Wrapper>
  );
}

export default App;
