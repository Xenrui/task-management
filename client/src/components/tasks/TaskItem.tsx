import React from "react";
import { Trash2, Edit2, Check } from "lucide-react";
import type { Task } from "../../types/Task";

interface TaskItemProps {
	task: Task;
	onToggleComplete: (task: Task) => void;
	onEdit: (task: Task) => void;
	onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onEdit, onDelete }) => {
	return (
		<div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition">
			<div className="flex items-start gap-3">
				<button
					onClick={() => onToggleComplete(task)}
					className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
						task.completed ? "bg-green-500 border-green-500" : "border-gray-300 hover:border-green-500"
					}`}
				>
					{task.completed && <Check size={16} className="text-white" />}
				</button>
				<div className="flex-1 min-w-0">
					<h3
						className={`text-lg font-semibold ${
							task.completed ? "line-through text-gray-400" : "text-gray-800"
						}`}
					>
						{task.title}
					</h3>
					{task.description && <p className="text-gray-600 mt-1 truncate">{task.description}</p>}
					{task.deadline && (
						<p className="text-sm text-gray-500 mt-2">
							Due: {new Date(task.deadline).toLocaleDateString()}
						</p>
					)}
				</div>
				<div className="flex gap-2 flex-shrink-0">
					<button
						onClick={() => onEdit(task)}
						className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
					>
						<Edit2 size={18} />
					</button>
					<button
						onClick={() => onDelete(task._id)}
						className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
					>
						<Trash2 size={18} />
					</button>
				</div>
			</div>
		</div>
	);
};
