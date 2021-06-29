import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import DisplayData from "./components/DisplayData/DisplayData";
import Header from "./components/Header/Header";
import SetTeam from "./components/SetTeam/SetTeam";

function App() {
  return (
    <div>
      
      <Router>
      <Header></Header>
        <Switch>
        <Route path="/header">
        <DisplayData></DisplayData>
          </Route>
          <Route exact path="/">
            <DisplayData></DisplayData>
          </Route>
          <Route path="/team/:id">
           <SetTeam></SetTeam>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
