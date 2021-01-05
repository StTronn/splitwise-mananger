import React, { useContext } from "react";
import { Expenses } from "../context/Expenses";

const AddExpense = () => {
	const { state, dispatch } = useContext(Expenses);
	const handleClick = () => {
		dispatch({ type: "ADD_EXPENSE", payload: {} });
	};
	return (
		<div className="grid w-screen">
			<div className="w-60 grid py-8 justify-self-center self-center">
				<button
					onClick={handleClick}
					className="p-4 bg-green-400 hover:bg-green-500 w-full rounded-lg shadow text-xl font-medium text-white"
				>
					Add an Expense
				</button>
			</div>
		</div>
	);
};

export default AddExpense;
