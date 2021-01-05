import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ExpenseViewer from "./components/ExpenseViewer";
import Expense from "./components/Expense";
import AddExpense from "./components/AddExpense";
import { Expenses } from "./context/Expenses";

function App() {
  const { state, dispatch } = useContext(Expenses);
  const { expenses } = state;
  return (
    <div className="min-h-screen bg-gray-200">
      <Router>
        <Switch>
          <Route path="/Expense">
            <Expense />
          </Route>
          <Route path="/">
            {expenses.map((expense, index) => (
              <ExpenseViewer expense={expense} index={index} key={index} />
            ))}

            <AddExpense />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
