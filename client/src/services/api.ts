import type { NewTask, Task } from "../types/Task";
import { config } from "../config/env";

const API_URL = `${config.apiUrl}/tasks`;

export const taskApi = {
	getTasks: async (): Promise<Task[]> => {
		const response = await fetch(API_URL);
		if (!response.ok) throw new Error("Failed to fetch tasks");
		return response.json();
	},

	createTask: async (task: NewTask): Promise<Task> => {
		const response = await fetch(API_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(task),
		});

		if (!response.ok) throw new Error("Failed to create task");
		return response.json();
	},

	updateTask: async (id: string, task: Partial<Task>): Promise<Task> => {
		const response = await fetch(`${API_URL}/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(task),
		});
		if (!response.ok) throw new Error("Failed to update task");
		return response.json();
	},

	deleteTask: async (id: string): Promise<void> => {
		const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
		if (!response.ok) throw new Error("Failed to delete task");
	},
};
