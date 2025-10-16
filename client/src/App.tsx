import Schedule from "./pages/Schedule";
import Task from "./pages/Task";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { defaultNavItems } from "./config/navigation";

const App = () => {
	return (
		<Router>
			<Layout
				navItems={defaultNavItems}
				defaultSection="task"
				onSectionChange={(section) => {
					console.log("Current section:", section);
				}}
			>
				<Routes>
					<Route path="/" element={<Navigate to={"/task"} />} />
					<Route path="/task" element={<Task />} />
					<Route path="/schedule" element={<Schedule />} />
				</Routes>
			</Layout>
		</Router>
	);
};

export default App;
