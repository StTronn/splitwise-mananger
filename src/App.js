import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Expense from "./components/Expense";
import AddExpense from "./components/AddExpense";
import Card from "./components/Card";
import { Expenses } from "./context/Expenses";

function App() {
  const { state, dispatch } = useContext(Expenses);
  const { expenses } = state;
  return (
    <div className="min-h-screen bg-gray-200">
      <Router>
        <Switch>
          <Route path="/:name/:title">
            <Card />
          </Route>
          <Route path="/:name/">
            <Card />
          </Route>
          <Route path="/">
            <Card />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
