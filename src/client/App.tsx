import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import OverviewPage from "./components/OverviewPage";
import ProfilePage from "./components/ProfilePage";
import ReadingPage from "./components/ReadingPage";
import TaskPage from "./components/TaskPage";

const App = () => {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/overview" component={OverviewPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/reading" component={ReadingPage} />
          <Route path="/task" component={TaskPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
