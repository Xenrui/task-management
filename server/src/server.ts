import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import taskRoutes from "./routes/task";

dotenv.config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

// Database Connection
mongoose
	.connect(process.env.MONGO_URI as string)
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.log("MongoDB connection error: ", err));

app.listen(port, () => {
	console.log(`Server is running on Port ${port}`);
});
