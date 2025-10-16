import React from "react";
import type { Task } from "../../types/Task";

interface TaskStatsProps {
	tasks: Task[];
}

export const TaskStats: React.FC<TaskStatsProps> = ({ tasks }) => {
	const activeCount = tasks.filter((t) => !t.completed).length;
	const completedCount = tasks.filter((t) => t.completed).length;

	return (
		<div className="my-6 bg-white rounded-lg shadow-lg p-4">
			<div className="flex justify-around text-center">
				<div>
					<div className="text-2xl font-bold text-gray-800">{tasks.length}</div>
					<div className="text-sm text-gray-600">Total Tasks</div>
				</div>
				<div>
					<div className="text-2xl font-bold text-blue-600">{activeCount}</div>
					<div className="text-sm text-gray-600">Active</div>
				</div>
				<div>
					<div className="text-2xl font-bold text-green-600">{completedCount}</div>
					<div className="text-sm text-gray-600">Completed</div>
				</div>
			</div>
		</div>
	);
};
