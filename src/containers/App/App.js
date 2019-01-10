import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => (
  <>
    <CssBaseline />
    <Router>
      <div>
        <Routes />
      </div>
    </Router>
  </>
);

export default App;
