import React from "react";
import HeaderComponent from "./components/Header";
import FormTestComponent from "./components/FormTest";
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderComponent info="This is my new Header" />
      <FormTestComponent />
    </div>
  );
};

export default App;
