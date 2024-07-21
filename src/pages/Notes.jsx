import { Link } from "react-router-dom";
import { Divider, NavBar, NoteItem } from "../components";
import Wrapper from "../assets/wrappers/Note";

const Notes = ({ notes }) => {
	return (
		<div>
			<NavBar notes={notes} />
			<Divider />
			<Wrapper>
				<div>
					{notes.map((note) => (
						<NoteItem key={note.id} note={note} />
					))}
				</div>
			</Wrapper>
		</div>
	);
};
export default Notes;
