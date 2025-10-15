import Task from "./pages/Task";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to={'/task'}/>}/>
				<Route path="/task" element={<Task />}/>
			</Routes>
		</Router>
	);
};

export default App;
