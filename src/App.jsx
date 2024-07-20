import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import { Notes, CreateNote, EditNote } from "./pages";
import { useEffect, useState } from "react";
import dummyNotes from "./dummy_notes";

const App = () => {
	const [notes, setNotes] = useState(
		JSON.parse(localStorage.getItem("notes")) || []
	);
	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Notes notes={notes} />} />
				<Route
					path="/create"
					element={<CreateNote setNotes={setNotes} />}
				/>
				<Route
					path="/edit/:id"
					element={<EditNote notes={notes} setNotes={setNotes} />}
				/>
			</Routes>
		</HashRouter>
	);
};

export default App;
