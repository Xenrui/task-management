import { Ban, Logs, Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

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
		id: "try",
		name: "Try",
		path: "/try",
		icon: Logs,
		description: "list of trys",
	},
];

const Navigation: React.FC = () => {

    const getActiveSection = () => {
        const path = location.pathname.slice(1);
        const section = path.split("/")[0];
        const validSection = navItems.map((items) => items.id);
        return validSection.includes(section) ? section : "task";
    };

  const activeSection = getActiveSection();

	return (
		<div className="w-30 border-r-1 border-gray-300/50">
			{/* Desktop Nav */}
			<div>
				{/* Logo */}
				<div className="flex justify-center mb-5">
					<a href="" className="p-7">
						<Ban className="w-15 h-auto" />
					</a>
				</div>

				{/* NavItems */}
				<div className="">
					{navItems.map(({ id, name, path, icon, description }) => {
						const Icon = icon;
            const isActive = activeSection === id;
						return (
							<Link
								key={id}
								to={path}
								className={cn(
									"flex justify-center items-center text-md font-medium gap-1.5 h-full px-5 py-2 rounded-lg whitespace-nowrap",
									isActive ? "text-green-500 bg-green-100/80" : "text-gray-600"
								)}
								title={description}
							>
								<span className=" ">{name}</span>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Navigation;
