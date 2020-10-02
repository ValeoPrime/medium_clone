import React from "react";
import ReactDOM from "react-dom";
import Routes from "pages/routes";
import { BrowserRouter as Router } from "react-router-dom";
import TopBar from 'components/topBar/TopBar'
import {CurentUserProvider} from './node_modules/contexts/curentUserContaxet'

const App = () => {
  return (
    <CurentUserProvider>
      <Router>
        <TopBar/>
        <Routes />
      </Router>
    </CurentUserProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
