import dotenv from "dotenv";
import type { Task } from "../types/Task";

const API_URL = "http://localhost:5000/api/tasks";

export const taskApi = {
	getTasks: async (): Promise<Task[]> => {
		const response = await fetch(API_URL);
		if (!response.ok) throw new Error("Failed to fetch tasks");
        return response.json();
	},


};
