import Navigation from "../components/Navigation";
import { Header } from "../components/Header";


const Schedule = () => {
	return (
		<div className="flex">
			<Navigation />
			<div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
				<div className="pl-35 max-w-4xl mx-auto">
					<Header title="Schedule" subtitle="asfd"/>
				</div>
			</div>
		</div>
	);
};

export default Schedule;
