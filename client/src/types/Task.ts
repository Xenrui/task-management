export interface Task {
	_id: string;
	title: string;
	description?: string;
	completed: boolean;
	deadline?: string;
	createdAt: string;
}

export type NewTask = Omit<Task, "_id" | "createdAt" | "completed">;
