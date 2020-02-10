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
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/overview">Overview</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/reading">Read</Link>
            </li>
            <li>
              <Link to="/task">Tasks</Link>
            </li>
          </ul>
        </nav>

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
