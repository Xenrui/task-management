import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import type { Task } from "../types/Task";
import { taskApi } from "../services/api";

const Task: React.FC = () => {
	
	const [tasks, setTasks] = useState<Task[]>([]);

	useEffect(() => {
		loadTasks();
	}, [])
	
	const loadTasks = async() => {
		try{
			const data = await taskApi.getTasks();
			setTasks(data);
		} catch (err) {
			console.log(err)
		}
	}


	return (
		<div className="flex min-h-screen">
			<Navigation />
			<div className="">
				{tasks.map((task)=> {
					return (
						<div className="">

							<span>{task._id}</span><br/>
							<span>{task.title}</span><br/>
							<span>{task.description}</span>
						</div>
					)
				})}
			</div>
		</div>
	);
};

export default Task;
