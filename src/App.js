import "./App.css";
import Home from "./Components/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TeamDetail from "./Components/TeamDetail/TeamDetail";

function App() {
  return (
    
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/team/:idTeam">
          <TeamDetail></TeamDetail>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
