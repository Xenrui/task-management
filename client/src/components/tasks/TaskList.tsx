import React from "react";
import type { Task } from "../../types/Task";
import { TaskItem } from "./TaskItem";

interface TaskListProps {
	tasks: Task[];
	searchTerm: string;
	onToggleComplete: (task: Task) => void;
	onEdit: (task: Task) => void;
	onDelete: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({ tasks, searchTerm, onToggleComplete, onEdit, onDelete }) => {
	if (tasks.length === 0) {
		return (
			<div className="bg-white rounded-lg shadow-lg p-8 text-center text-gray-500">
				{searchTerm ? "No tasks found matching your search" : "No tasks yet. Create one to get started!"}
			</div>
		);
	}

	return (
		<div className="space-y-3">
			{tasks.map((task) => (
				<TaskItem
					key={task._id}
					task={task}
					onToggleComplete={onToggleComplete}
					onEdit={onEdit}
					onDelete={onDelete}
				/>
			))}
		</div>
	);
};
