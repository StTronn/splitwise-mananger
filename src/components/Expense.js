import React, { useState, useContext } from "react";
import queryString from "query-string";
import { useLocation, useHistory } from "react-router-dom";
import { Expenses } from "../context/Expenses";
import EditUser from "./EditUser";

const Expense = () => {
	const history = useHistory();
	const location = useLocation();
	const { index } = queryString.parse(location.search);
	const { state, dispatch } = useContext(Expenses);
	const expense = state.expenses[index];

	const [name, setName] = useState(expense.name || "");
	const [totalAmount, setTotalAmount] = useState(expense.totalAmount || "");
	const [users, setUsers] = useState(expense.users || []);

	const updateUser = (index, obj) => {
		if (users.length < index) return;
		let newUsers = [...users];
		newUsers[index] = obj;
		setUsers(newUsers);
	};

	const saveExpense = () => {
		const payload = { name, totalAmount, users };
		dispatch({ type: "UPDATE_EXPENSE", payload, index });
		history.push("/");
	};
	return (
		<div className="min-h-screen flex-1 bg-gray-200 p-4 flex justify-center items-center">
			<div className="bg-white w-full md:max-w-4xl rounded-lg shadow">
				<div className="h-12 pb-4 flex justify-between items-center border-b border-gray-200 m-4">
					<div>
						<input
							placeholder="Name"
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
							className="text-xl font-bold text-gray-700 focus:outline-none"
						/>
						<div className="text-sm font-base text-gray-500">
							{users.length} Members
						</div>
					</div>
					<div className="border-b-2 border-green-400 mr-2 pl-2">
						<input
							value={totalAmount}
							onChange={(e) => {
								setTotalAmount(e.target.value);
							}}
							placeholder="Value"
							size="2"
							className=" text-xl font-bold  text-gray-800 focus:outline-none"
						/>
					</div>
				</div>
				<div className="px-6">
					{users.map((user, i) => (
						<EditUser user={user} index={i} key={i} updateUser={updateUser} />
					))}
					<AddUser users={users} setUsers={setUsers} />
				</div>
				<div className="p-6 ">
					<button
						onClick={saveExpense}
						className="p-4 bg-green-400 hover:bg-green-500 w-full rounded-lg shadow text-xl font-medium uppercase text-white"
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

const AddUser = ({ users, setUsers }) => {
	const obj = { name: "", share: "", paid: "" };
	const newUsers = [...users, obj];
	const handleClick = () => {
		setUsers(newUsers);
	};

	return (
		<div
			onClick={handleClick}
			className="flex bg-gray-200 justify-center items-center h-16 p-4 my-6  rounded-lg  shadow-inner"
		>
			<div className="flex items-center border border-gray-400 p-2 border-dashed rounded cursor-pointer">
				<div>
					<svg
						className="text-gray-500 w-6 h-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokelinecap="round"
							strokelinejoin="round"
							strokewidth="{2}"
							d="M12 6v6m0 0v6m0-6h6m-6 0H6"
						/>
					</svg>
				</div>
				<div className="ml-1 text-gray-500 font-medium">Add a Person</div>
			</div>
		</div>
	);
};

export default Expense;
