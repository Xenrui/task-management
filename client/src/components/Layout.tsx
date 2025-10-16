import React from "react";
import Navigation from "./Navigation";
import type { NavItem } from "../types/Navigation";

interface LayoutProps {
	children: React.ReactNode;
	navItems: NavItem[];
	defaultSection?: string;
	logo?: React.ReactNode;
	onSectionChange?: (section: string) => void;
	className?: string;
}

const Layout: React.FC<LayoutProps> = ({
	children,
	navItems,
	defaultSection = "task",
	logo,
	onSectionChange,
	className = "",
}) => {
	return (
		<div className="flex h-screen bg-gray-100">
			<Navigation
				items={navItems}
				defaultSection={defaultSection}
				logo={logo}
				onSectionChange={onSectionChange}
			/>
			<main className={`flex-1 overflow-auto transition-all duration-300 ${className}`}>{children}</main>
		</div>
	);
};

export default Layout;
