import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../App.css";

import Rules from "./Rules";
import Game from "./Game";
import Nav from "./NavigationBar";

export default function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/game" component={Game} />
        <Route path="/rules" component={Rules} />
      </Switch>
    </Router>
  );
}
