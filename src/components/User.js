import React from "react";

const User = ({ user }) => {
	//in case user is null prevent error
	let name = "";
	let share = 0;
	let paid = 0;
	if (user) {
		name = user.name;
		share = user.share;
		paid = user.paid;
	}
	const diff = paid - share;
	return (
		<div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
			<div className="flex items-center">
				<img
					className="rounded-full h-12 w-12"
					src="https://static-cdn.jtvnw.net/jtv_user_pictures/27fdad08-a2c2-4e0b-8983-448c39519643-profile_image-70x70.png"
					alt="Logo"
				/>
				<div className="ml-2">
					<div className="text-sm font-semibold text-gray-600">{name}</div>
				</div>
			</div>
			<div className="text-xl font-bold text-gray-700">
				{" "}
				{paid} {diff >= 0 ? <Plus value={diff} /> : <Negative value={diff} />}
			</div>
		</div>
	);
};

const Plus = ({ value }) => {
	return <span className="text-green-400 text-base">+{value}</span>;
};

const Negative = ({ value }) => {
	return <span className="text-red-400 text-base">{value}</span>;
};

export default User;
