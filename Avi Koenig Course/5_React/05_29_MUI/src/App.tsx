import { useState } from "react";
import "./App.css";

import MUIAppBar from "./components/MUIAppBar";
import CustomLoginForm from "./components/CustomLoginForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col">
      <div className="w-full flex"><MUIAppBar /></div>
      <CustomLoginForm />
    </div>
  );
}

export default App;
