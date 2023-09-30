import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
