import { Link } from "react-router-dom";
import { NavBar, NoteItem } from "../components";

const Notes = ({ notes }) => {
	return (
		<div>
			<NavBar />
			<div>
				{notes.map((note) => (
					<NoteItem key={note.id} note={note} />
				))}
			</div>
		</div>
	);
};
export default Notes;
