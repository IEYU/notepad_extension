import { Link } from "react-router-dom";
import { NavBar, NoteItem } from "../components";
import dummyNotes from "../dummy_notes.js";

const Notes = () => {
	return (
		<div>
			<NavBar />
			<div>
				{dummyNotes.map((note) => (
					<NoteItem key={note.id} note={note} />
				))}
			</div>
		</div>
	);
};
export default Notes;
