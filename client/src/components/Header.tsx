import React from "react";

interface HeaderProps {
	title: string;
	subtitle: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
	return (
		<div className="bg-white rounded-lg shadow-lg p-6 mb-6">
			<h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
			<p className="text-gray-600">{subtitle} </p>
		</div>
	);
};
