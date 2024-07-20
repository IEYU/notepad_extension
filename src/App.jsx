import { HashRouter, Routes, Route } from "react-router-dom";
import { Notes, CreateNote, EditNote } from "./pages";

const App = () => {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Notes />} />
				<Route path="/create" element={<CreateNote />} />
				<Route path="/edit/:id" element={<EditNote />} />
			</Routes>
		</HashRouter>
	);
};

export default App;
