import React, { useState, useEffect } from "react";
import type { Task, NewTask } from "../../types/Task";

interface TaskFormProps {
	editingTask: Task | null;
	onSubmit: (task: NewTask) => void;
	onCancel: () => void;
}

export const TaskForm: React.FC<TaskFormProps> = ({ editingTask, onSubmit, onCancel }) => {
	const [formData, setFormData] = useState<NewTask>({
		title: "",
		description: "",
		deadline: "",
	});

	useEffect(() => {
		if (editingTask) {
			setFormData({
				title: editingTask.title,
				description: editingTask.description || "",
				deadline: editingTask.deadline || "",
			});
		} else {
			setFormData({ title: "", description: "", deadline: "" });
		}
	}, [editingTask]);

	const handleSubmit = () => {
		if (!formData.title.trim()) return;
		onSubmit(formData);
		setFormData({ title: "", description: "", deadline: "" });
	};

	return (
		<div className={`rounded-lg shadow-lg p-6 mb-6 bg-white ${editingTask ? /*'fixed z-100 flex justify-self'*/ '': ''}`}>
			<h2 className="text-xl font-bold text-gray-800 mb-4">{editingTask ? "Edit Task" : "New Task"}</h2>
			<div>
				<div className="mb-4">
					<label className="block text-gray-700 font-medium mb-2">Title *</label>
					<input
						type="text"
						value={formData.title}
						onChange={(e) => setFormData({ ...formData, title: e.target.value })}
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-medium mb-2">Description</label>
					<textarea
						value={formData.description}
						onChange={(e) => setFormData({ ...formData, description: e.target.value })}
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						rows={3}
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-medium mb-2">Due Date</label>
					<input
						type="date"
						value={formData.deadline}
						onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					/>
				</div>
				<div className="flex gap-3">
					<button
						onClick={handleSubmit}
						className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
					>
						{editingTask ? "Update" : "Create"} Task
					</button>
					<button
						onClick={onCancel}
						className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 rounded-lg transition"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};
