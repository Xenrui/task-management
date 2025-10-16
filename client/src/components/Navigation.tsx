import { CalendarCheck, Logs, Origami, PanelLeft } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const navItems: {
	id: string;
	name: string;
	path: string;
	icon: React.ComponentType<{ className?: string }>;
	description: string;
}[] = [
	{
		id: "task",
		name: "Task",
		path: "/task",
		icon: Logs,
		description: "list of tasks",
	},
	{
		id: "schedule",
		name: "Schedule",
		path: "/schedule",
		icon: CalendarCheck,
		description: "time schedules",
	},
];

const Navigation: React.FC = () => {
	const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

	const getActiveSection = () => {
		const path = location.pathname.slice(1);
		const section = path.split("/")[0];
		const validSection = navItems.map((items) => items.id);
		return validSection.includes(section) ? section : "task";
	};

	const activeSection = getActiveSection();

	return (
		<div
			className={`fixed top-0 left-0 z-100 border-r-1 bg-gray-800 text-white transform transition-transform duration-300 min-h-screen  ${
				sideBarOpen ? "w-60" : "w-20"
			}`}
		>
			{/* Desktop Nav */}
			<div onClick={() => setSideBarOpen(!sideBarOpen)} className="absolute cursor-pointer m-6 z-50 left-0">
				<PanelLeft className="w-6 h-auto" />
			</div>
			<div>
				{/* Logo */}
				<div className="flex justify-center my-10">
					<a href="" className="p-7">
						<Origami className="w-15 h-auto text-gray-300" />
					</a>
				</div>

				{/* NavItems */}
				<div className="text-white px-3">
					{navItems.map(({ id, name, path, icon, description }) => {
						const Icon = icon;
						const isActive = activeSection === id;
						return (
							<Link
								key={id}
								to={path}
								className={`flex items-center text-md font-medium gap-1.5 h-full rounded-lg whitespace-nowrap
									${isActive ? "text-gray bg-blue-500/80" : "text-gray-400"} ${
									sideBarOpen ? "px-7 py-4 justify-items-start" : "p-4 justify-center"
								}`}
								title={description}
							>
								<Icon className="w-4 h-auto" />
								{sideBarOpen && <span className=" ">{name}</span>}
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Navigation;
