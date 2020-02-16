import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import IssuePage from "./components/IssuePage";
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
          <Route path="/issue" component={IssuePage} />
        </Switch>
        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
