import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import OverviewPage from "./components/OverviewPage";
import ReadingPage from "./components/ReadingPage";
import TaskPage from "./components/TaskPage";

// tslint:disable-next-line: ordered-imports
import "bootstrap/dist/css/bootstrap.css";
import "./styling.css";

const App = () => {
  return (
    <Router>
      <div className="container-fluid text-center">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/overview" component={OverviewPage} />
          <Route path="/reading" component={ReadingPage} />
          <Route path="/task" component={TaskPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
