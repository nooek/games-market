import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import {
  Home
} from "./pages/index"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" component={() => <h2>Error 404 - Page Not Found</h2>} />
      </Switch>
    </Router>
  );
}

export default App;
