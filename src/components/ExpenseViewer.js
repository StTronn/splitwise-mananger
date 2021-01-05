import React from "react";
import User from "./User";
import { Link } from "react-router-dom";

const ExpenseViewer = ({ expense, index }) => {
	const { name, totalAmount, users } = expense;
	return (
		<div className="  bg-gray-200 p-4 flex justify-center items-center">
			<div className="bg-white w-full md:max-w-4xl rounded-lg shadow">
				<div className="h-12 pb-4 flex justify-between items-center border-b border-gray-200 m-4">
					<div>
						<div className="text-xl font-bold text-gray-700">{name}</div>
						<div className="text-sm font-base text-gray-500">
							{users && users.length} Members
						</div>
					</div>
					<div>
						<span className="text-xl font-bold text-gray-800">
							{totalAmount}
							{" $"}
						</span>
					</div>
				</div>
				<div className="px-6">
					{users && users.map((user, id) => <User user={user} key={id} />)}
				</div>
				<div className="p-6 ">
					<Link to={`/expense?index=${index}`}>
						<button className="p-4 bg-green-400 hover:bg-green-500 w-full rounded-lg shadow text-xl font-medium uppercase text-white">
							Edit
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ExpenseViewer;
