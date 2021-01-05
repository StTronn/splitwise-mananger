import React, { useState, useEffect } from "react";

const EditUser = ({ user, index, updateUser }) => {
	const { name, share, paid } = user;
	const [userName, setUserName] = useState(name);
	const [userShare, setUserShare] = useState(share);
	const [userPaid, setUserPaid] = useState(paid);

	useEffect(() => {
		updateUser(index, { name: userName, share: userShare, paid: userPaid });
	}, [userName, userShare, userPaid]);

	return (
		<div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
			<div className="flex items-center">
				<img
					className="rounded-full h-12 w-12"
					src="https://static-cdn.jtvnw.net/jtv_user_pictures/27fdad08-a2c2-4e0b-8983-448c39519643-profile_image-70x70.png"
					alt="Logo"
				/>
				<div className="ml-2">
					<input
						placeholder="Person Name"
						value={userName}
						onChange={(e) => {
							setUserName(e.target.value);
						}}
						className="text-sm font-semibold text-gray-600 focus:outline-none"
					/>
				</div>
			</div>
			<div className="text-xl font-bold text-gray-700">
				<span className="text-red-400 text-base">
					<input
						value={userPaid}
						onChange={(e) => {
							setUserPaid(e.target.value);
						}}
						type="text"
						className="w-20 py-2 pl-2 text-green-400 font-bold rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
						placeholder="Paid"
					/>
				</span>

				<span className="ml-2 text-red-400 text-base">
					<input
						value={userShare}
						onChange={(e) => {
							setUserShare(e.target.value);
						}}
						type="text"
						className="w-20 py-2 pl-2 rounded-lg border-2  font-bold border-gray-200 outline-none focus:border-indigo-500"
						placeholder="Share"
					/>
				</span>
			</div>
		</div>
	);
};

export default EditUser;
