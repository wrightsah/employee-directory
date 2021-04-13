import "./App.css";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

import EmployeeCard from "./components/EmployeeCard/EmployeeCard";

function App() {
  return (
    <Wrapper>
      <Title>Employee Directory</Title>
      <EmployeeCard />
    </Wrapper>
  );
}

export default App;
