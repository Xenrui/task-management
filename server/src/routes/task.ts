import express, { Request, Response } from "express";
import Task from "../models/Task";

const router = express.Router();

// Get Task
router.get("/", async (req: Request, res: Response) => {
	try {
		const Tasks = await Task.find();
	} catch (err) {
		res.status(500).json({ message: "Internal Server Error" });
	}
});

// Create Task
router.post("/", async (req: Request, res: Response) => {
	try {
		const newTask = new Task(req.body);
		await newTask.save();
		res.status(201).json(newTask);
	} catch (err) {
		res.status(400).json({ message: "Bad Request" });
	}
});

// Update a task
router.put("/:id", async (req: Request, res: Response) => {
	try {
		const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!updatedTask) return res.status(404).json({ message: "Task not Found!" });
	} catch (err) {
		res.status(400).json({ message: "Bad Request" });
	}
});

// Delete a task
router.delete("/:id", async (req: Request, res: Response) => {
	try {
		const deletedTask = await Task.findByIdAndDelete(req.params.id);
		if (!deletedTask) return res.status(404).json({ message: "Task not found" });
		res.json({ message: "Task deleted" });
	} catch (err) {
		res.status(500).json({ message: "Server error" });
	}
});

export default router;
