import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import FormTestComponent from "./components/FormTest";
import Routes from './routes';
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <div className="appContainer">
        <FormTestComponent />
      </div>
    </BrowserRouter>
  );
};

export default App;
