import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import type { Task, NewTask } from "../types/Task";
import { taskApi } from "../services/api";
import { Header } from "../components/Header";
import { ErrorMessage } from "../components/ErrorMessage";
import { SearchBar } from "../components/tasks/SearchBar";
import { TaskForm } from "../components/tasks/TaskForm";
import { TaskList } from "../components/tasks/TaskList";
import { TaskStats } from "../components/tasks/TaskStats";

export default function Task() {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [showForm, setShowForm] = useState(false);
	const [editingTask, setEditingTask] = useState<Task | null>(null);
	const [searchTerm, setSearchTerm] = useState("");
	const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

	const header = {
		title: "Task Manager",
		subtitile: "Stay organized and productive",
	};

	useEffect(() => {
		loadTasks();
	}, []);

	const loadTasks = async () => {
		try {
			setLoading(true);
			setError(null);
			const data = await taskApi.getTasks();
			setTasks(data);
		} catch (err) {
			setError("Failed to load tasks. Make sure your backend is running on http://localhost:5000");
		} finally {
			setLoading(false);
		}
	};

	const handleCreateTask = async (taskData: NewTask) => {
		try {
			if (editingTask) {
				const updated = await taskApi.updateTask(editingTask._id, taskData);
				setTasks(tasks.map((t) => (t._id === updated._id ? updated : t)));
				setEditingTask(null);
			} else {
				const newTask = await taskApi.createTask(taskData);
				setTasks([...tasks, newTask]);
			}
			setShowForm(false);
		} catch (err) {
			setError("Failed to save task");
		}
	};

	const handleToggleComplete = async (task: Task) => {
		try {
			const updated = await taskApi.updateTask(task._id, { completed: !task.completed });
			setTasks(tasks.map((t) => (t._id === updated._id ? updated : t)));
		} catch (err) {
			setError("Failed to update task");
		}
	};

	const handleDeleteTask = async (id: string) => {
		try {
			await taskApi.deleteTask(id);
			setTasks(tasks.filter((t) => t._id !== id));
		} catch (err) {
			setError("Failed to delete task");
		}
	};

	const handleEditTask = (task: Task) => {
		setEditingTask(task);
		setShowForm(true);
	};

	const handleCancelForm = () => {
		setEditingTask(null);
		setShowForm(false);
	};

	const filteredTasks = tasks
		.filter((task) => {
			if (filter === "active") return !task.completed;
			if (filter === "completed") return task.completed;
			return true;
		})
		.filter(
			(task) =>
				task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				task.description?.toLowerCase().includes(searchTerm.toLowerCase())
		);

	if (loading) {
		return (
			<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
				<div className="text-xl text-gray-600">Loading tasks...</div>
			</div>
		);
	}

	return (
		<div className="flex">
			<div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
				<div className="max-w-4xl mx-auto">
					<Header title={header.title} subtitle={header.subtitile} />

					{error && <ErrorMessage message={error} />}

					<SearchBar
						searchTerm={searchTerm}
						onSearchChange={setSearchTerm}
						filter={filter}
						onFilterChange={setFilter}
					/>

					{!showForm && (
						<button
							onClick={() => setShowForm(true)} //
							className={`w-full ${
								error != null ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
							} cursor-pointer text-white font-semibold py-3 rounded-lg shadow-lg mb-6 flex items-center justify-center gap-2 transition`}
							disabled={error != null} //false
						>
							<Plus size={20} />
							Add New Task
						</button>
					)}

					{showForm && (
						<TaskForm editingTask={editingTask} onSubmit={handleCreateTask} onCancel={handleCancelForm} />
					)}

					<TaskStats tasks={tasks} />

					<TaskList
						tasks={filteredTasks}
						searchTerm={searchTerm}
						onToggleComplete={handleToggleComplete}
						onEdit={handleEditTask}
						onDelete={handleDeleteTask}
					/>
				</div>
			</div>
		</div>
	);
}
