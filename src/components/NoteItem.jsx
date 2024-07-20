import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
	return (
		<Link to={`/edit/${note.id}`} className="note">
			<h4>{note.title}</h4>
			<p>{note.date}</p>
		</Link>
	);
};
export default NoteItem;
