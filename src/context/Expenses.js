import React, { useReducer } from "react";

export const Expenses = React.createContext();

const initialState = {
	expenses: JSON.parse(localStorage.getItem("expenses")) || [],
};

function reducer(state, { type, payload, index }) {
	const { expenses } = state;
	console.log("reducer");
	switch (type) {
		case "UPDATE_EXPENSE":
			const newExpenses = [...expenses];
			newExpenses[index] = payload;
			console.log(newExpenses);
			localStorage.setItem("expenses", JSON.stringify(newExpenses));
			return { expenses: newExpenses };
		case "ADD_EXPENSE": {
			console.log(expenses);
			const newExpenses = [...expenses, payload];
			localStorage.setItem("expenses", JSON.stringify(newExpenses));
			return { expenses: newExpenses };
		}
		default:
			return state;
	}
}

export function ExpensesProvider(props) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = { state, dispatch };
	console.log(value);
	return <Expenses.Provider value={value}>{props.children}</Expenses.Provider>;
}
