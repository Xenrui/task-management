import type { LucideIcon } from "lucide-react";

export interface NavItem {
	id: string;
	name: string;
	path: string;
	icon: LucideIcon;
	description: string;
}

export interface NavigationProps {
	items: NavItem[];
	defaultSection?: string;
	logo?: React.ReactNode;
	onSectionChange?: (section: string) => void;
	className?: string;
}
