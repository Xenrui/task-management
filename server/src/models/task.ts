import { Schema, model, Document } from "mongoose";

interface ITask extends Document {
	title: string;
	description?: string;
	completed: boolean;
	deadline: Date;
	createdAt: Date;
}

const taskSchema = new Schema<ITask>({
	title: { type: String, required: true },
	description: { type: String },
	completed: { type: Boolean, default: false },
	deadline: { type: Date },
	createdAt: { type: Date, default: Date.now },
});

const Task = model<ITask>("Task", taskSchema);

export default Task;
