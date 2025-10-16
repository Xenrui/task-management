import Schedule from "./pages/Schedule";
import Task from "./pages/Task";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to={'/task'}/>}/>
				<Route path="/task" element={<Task />}/>
				<Route path="/schedule" element={<Schedule />}/>
			</Routes>
		</Router>
	);
};

export default App;
