import { CalendarCheck, LayoutList, Logs } from "lucide-react";
import type { NavItem } from "../types/Navigation";

export const defaultNavItems: NavItem[] = [
	{
		id: "task",
		name: "Task",
		path: "/task",
		icon: LayoutList,
		description: "List of tasks",
	},
	{
		id: "schedule",
		name: "Schedule",
		path: "/schedule",
		icon: CalendarCheck,
		description: "Time schedules",
	},
];
