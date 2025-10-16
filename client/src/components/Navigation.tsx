import { Origami, PanelLeft } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import type { NavigationProps } from "../types/Navigation";

const Navigation: React.FC<NavigationProps> = ({
	items,
	defaultSection = "task",
	logo,
	onSectionChange,
	className = "",
}) => {
	const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
	const location = useLocation();

	const getActiveSection = () => {
		const path = location.pathname.slice(1);
		const section = path.split("/")[0];
		const validSection = items.map((item) => item.id);
		return validSection.includes(section) ? section : defaultSection;
	};

	const activeSection = getActiveSection();

	useEffect(() => {
		onSectionChange?.(activeSection);
	}, [activeSection, onSectionChange]);

	return (
		<nav
			className={`h-screen bg-gray-800 text-white transition-all duration-300 ${
				sideBarOpen ? "w-60" : "w-20"
			} ${className}`}
		>
			<div onClick={() => setSideBarOpen(!sideBarOpen)} className="absolute cursor-pointer hover:bg-gray-700 p-2 m-5 rounded-lg z-50">
				<PanelLeft className="w-6 h-auto" />
			</div>
			<div>
				{/* Logo */}
				<div className="flex justify-center my-10">
					{logo || (
						<div className="p-7">
							<Origami className="w-10 h-auto"/>
						</div>
					)}
				</div>

				{/* NavItems */}
				<div className="text-white px-3 space-y-2">
					{items.map(({ id, name, path, icon: Icon, description }) => {
						const isActive = activeSection === id;
						return (
							<Link
								key={id}
								to={path}
								className={`flex items-center text-md font-medium gap-1.5 rounded-lg whitespace-nowrap
                  ${isActive ? "text-white bg-blue-500/80" : "text-gray-400 hover:text-white hover:bg-gray-700"} ${
									sideBarOpen ? "px-7 py-4 justify-items-start" : "p-4 justify-center"
								}`}
								title={sideBarOpen ? "" : description}
							>
								<Icon className="w-5 h-5" />
								{sideBarOpen && <span>{name}</span>}
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
